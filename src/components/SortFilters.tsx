'use client'

import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { sortFilters } from "@/data/collectionFilters";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parseFilters, serializeFilters } from "@/utils";


export default function SortFilters() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const selected = parseFilters(searchParams.get("s"))

  const toggleFilter = (category: string, value: string) => {
    const current = selected[category] ?? []
    const next = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value]

    const updated = {...selected, [category]: next}

    const params = new URLSearchParams(searchParams.toString())
    const serialized = serializeFilters(updated)

    if (serialized) {
      params.set('s', serialized)
    } else {
      params.delete('s')
    }

    router.push(`${pathname}?${params}`, {scroll: false})
  }

  return (
    <div className="hidden sm:flex gap-4">
      {Object.entries(sortFilters).map(([category, subCategories]) => (
        <div
          key={category}
          className="relative"
        >
          <div
            onClick={() => setActiveFilter(activeFilter === category ? null : category)}
            className="border px-4 py-3 cursor-pointer"
          >
            {category}
            <IoChevronDown className={`ml-1 inline transition-transform duration-300 ${activeFilter === category ? "rotate-180" : "rotate-0"}`} />
          </div>

          {activeFilter === category &&
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
                      {filter.label}
                    </p>
                  </label>
                </form>
              ))}
            </div>
          }
        </div>
      ))}
    </div>
  );
};