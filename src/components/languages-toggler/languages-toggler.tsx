import { useRouter, usePathname } from "@/navigation";
import { ChangeEvent } from "react";

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
      className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:outline-primary focus:border-primary block w-fit appearance-none p-1"
    >
      <option value="en">English</option>
      <option value="uk">Українська</option>
    </select>
  );
};
