type ModuleKey =
  | "It"
  | "Ie"
  | "Production"
  | "Cutting"
  | "Printing"
  | "Embroidery"
  | "Quality"
  | "Employees"
  | "Recruitment"
  | "Payroll"
  | "Finance"
  | "Billing"
  | "Expenses";

type ModuleItem = {
  icon: string;
  label: string;
  key: ModuleKey;
};

type ModuleBlock = {
  title: string;
  items: ModuleItem[];
};
