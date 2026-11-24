import Link from "next/link";
import { MenuDataProps, MenuSectionProps, MenuItemProps } from '@/types'

export default function MegaMenu({ menu }: { menu: MenuDataProps }) {
  const columns = Object.entries(menu).filter((entry): entry is [string, MenuSectionProps[]] => entry[0] !== "title" && Array.isArray(entry[1]))


  return (
    <div>
      <div className="group">
        <div className={`cursor-pointer ${menu.title === 'MEN' && "ml-[4vw]"} addHoverEffect py-7`}>
          <Link href={`/collections/${menu.title.toLowerCase()}`}>{menu.title}</Link>
        </div>

        <div className="absolute left-0 top-full z-50 bg-[#ebebeb] px-10 py-5 border border-gray-400 rounded-md hidden group-hover:flex gap-10 overflow-x-auto w-[77vw] max-w-[90vw] xl:w-auto">
          {
            columns.map(([key, value]) => (
              <div key={key} className="flex flex-col">
                {value.map((section: MenuSectionProps, idx: number) => (
                  <ul key={section.heading} className="space-y-1 w-43">
                    <li className="cursor-pointer text-black font-bold">
                      <Link href={`/collections/${section.slug}`}>{section.heading}</Link>
                    </li>

                    {section.items.map((item: MenuItemProps) => (
                      <li key={item.title} className="cursor-pointer hover:font-bold">
                        <Link
                          href={`/collections/${item.slug}`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}

                    <hr className={`my-4 text-gray-300 ${idx === value.length - 1 && "hidden"}`} />
                  </ul>
                ))}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};