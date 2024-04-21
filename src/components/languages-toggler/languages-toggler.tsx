import { ChangeEvent } from "react";

import { useRouter, usePathname } from "@/navigation";

export const LanguagesToggler = ({ locale }: { locale: string }): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-primary focus:outline-primary focus:border-primary block w-fit leading-tight appearance-none px-1 py-[2px]"
    >
      <option value="en">Eng</option>
      <option value="uk">Укр</option>
    </select>
  );
};
