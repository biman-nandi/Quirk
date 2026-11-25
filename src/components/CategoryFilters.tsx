'use client'

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { collectionFilters } from "@/data/collectionFilters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parseFilters, serializeFilters } from "@/utils";
import { IoMdClose } from "react-icons/io";



export default function CategoryFilters() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [filterOpen, setFilterOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const selected = parseFilters(searchParams.get("f"))

  const toggleFilter = (category: string, value: string) => {
    const current = selected[category] ?? []
    const next = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value]

    const updated = { ...selected, [category]: next }

    const params = new URLSearchParams(searchParams.toString())
    const serialized = serializeFilters(updated)

    if (serialized) {
      params.set('f', serialized)
    } else {
      params.delete('f')
    }

    router.push(`${pathname}?${params}`, { scroll: false })
  }

  return (
    <div className="flex justify-between items-start">
      {/* Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setFilterOpen(true)}
          className="flex items-center border border-black px-4 py-3"
        >
          Filters
          <IoChevronDown className={`ml-1 inline transition-transform duration-300`} />
        </button>
      </div>


      {/* Desktop */}
      <div className="hidden sm:flex flex-wrap gap-4 w-[75%]">
        {Object.entries(collectionFilters).map(([category, subCategories]) => (
          <div key={category}>
            {category !== 'sort' &&
              <div
                className="relative"
              >
                <div
                  onClick={() => setActiveFilter(activeFilter === category ? null : category)}
                  className="flex items-center border border-black px-4 py-3 cursor-pointer"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <IoChevronDown className={`ml-1 inline transition-transform duration-300 ${activeFilter === category ? "rotate-180" : "rotate-0"}`} />
                </div>

                {
                  activeFilter === category &&
                  <div className="border flex bg-white p-4 mt-2 flex-col absolute left-0 z-45 shrink-0 w-50 h-fit max-h-50 overflow-y-auto">
                    {subCategories.map(filter => (
                      <form key={filter.label}>
                        <label className="flex items-center my-1">
                          <input
                            type="checkbox"
                            name={category}
                            onChange={() => toggleFilter(category, filter.value)}
                            checked={selected[category]?.includes(filter.value) ?? false}
                            className="appearance-none w-4 h-4 border checked:bg-black cursor-pointer shrink-0"
                          />
                          <p className="tracking-tighter pl-2 cursor-pointer shrink-0">
                            {filter.label} {'count' in filter && `(${filter.count})`}
                          </p>
                        </label>
                      </form>
                    ))}
                  </div>
                }
              </div>
            }
          </div>
        ))}
      </div>

      {!filterOpen &&
        <div>
          {Object.entries(collectionFilters).filter(([category]) => category === 'sort').map(([category, subCategories]) => (
            <div key={category}>
              <div
                className="relative"
              >
                <div
                  onClick={() => setActiveFilter(activeFilter === category ? null : category)}
                  className="flex items-center border border-black px-4 py-3 cursor-pointer"
                >
                  Sort By
                  <IoChevronDown className={`ml-1 inline transition-transform duration-300 ${activeFilter === category ? "rotate-180" : "rotate-0"}`} />
                </div>

                {
                  activeFilter === category &&
                  <div className="border flex bg-white p-4 mt-2 flex-col absolute right-0 z-45 shrink-0 w-50 h-fit max-h-50 overflow-y-auto">
                    {subCategories.map(filter => (
                      <form key={filter.label}>
                        <label className="flex items-center my-1">
                          <input
                            type="checkbox"
                            name={category}
                            onChange={() => toggleFilter(category, filter.value)}
                            checked={selected[category]?.includes(filter.value) ?? false}
                            className="appearance-none w-4 h-4 border checked:bg-black cursor-pointer shrink-0"
                          />
                          <p className="tracking-tighter pl-2 cursor-pointer shrink-0">
                            {filter.label}
                          </p>
                        </label>
                      </form>
                    ))}
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      }

      {
        filterOpen &&
        <div className="fixed inset-0 z-50 bg-white p-5">
          <div className="flex justify-between items-center pb-3 border-b border-gray-600">
            <h1 className="text-base flex items-center gap-2">
              <span className="font-semibold text-3xl tracking-wide">Filters</span>
              (50 items)
            </h1>
            <IoMdClose onClick={() => setFilterOpen(false)} className="text-gray-400 size-5 border border-gray-400" />
          </div>

          {Object.entries(collectionFilters).filter(([category]) => category !== 'sort').map(([category, subCategories]) => (
            <div key={category} className="py-3.5 border-b border-gray-600">
              <div
                className="relative"
              >
                <div
                  onClick={() => setActiveFilter(activeFilter === category ? null : category)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <IoChevronDown className={`inline transition-transform duration-300 text-gray-600 ${activeFilter === category ? "rotate-180" : "rotate-0"}`} />
                </div>

                {
                  activeFilter === category &&
                  <div className="mt-2">
                    {subCategories.map(filter => (
                      <form key={filter.label}>
                        <label className="flex items-center my-1">
                          <input
                            type="checkbox"
                            name={category}
                            onChange={() => toggleFilter(category, filter.value)}
                            checked={selected[category]?.includes(filter.value) ?? false}
                            className="appearance-none w-4 h-4 border border-black checked:bg-black cursor-pointer shrink-0"
                          />
                          <p className="tracking-tighter pl-2 cursor-pointer shrink-0">
                            {filter.label}
                          </p>
                        </label>
                      </form>
                    ))}
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};


/* 
  ->> categories:Maxi,Shirt::priceRanges:₹500 - ₹1,000"
  function parseFilters(f): Record<string, string[]> --> split, slice

  function serializeFilters(filters: Record<string, string[]>): string --> do the reverse through object.entity

  router, pathname, searchParams

  selected

  function toggleFilter(category, value)
  current, next
  updated

  const params -> URLSearchParams get old one
  serialized (reversify) updated obj
  then set it to params else delete
  then push it to the router
*/