import * as React from "react";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react";

interface Template {
  name: string;
  subject: string;
  body: string;
}

interface TemplateListProps {
  templates: Template[];
  onSelect: (template: Template) => void;
}

const TemplateList: React.FC<TemplateListProps> = ({ templates, onSelect }) => {
  const handleChange = (event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
    const template = templates.find(t => t.name === item?.key);
    if (template) {
      onSelect(template);
    }
  };

  return (
    <Dropdown
      placeholder="Select a template"
      label="Template List"
      options={templates.map(template => ({ key: template.name, text: template.name }))}
      onChange={handleChange}
    />
  );
};

export default TemplateList;

