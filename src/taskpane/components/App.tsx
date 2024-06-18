import * as React, { useState } from "react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import EmailTemplateForm from "./components/EmailTemplateForm";
import TemplateList from "./components/TemplateList";

initializeIcons();

interface Template {
  name: string;
  subject: string;
  body: string;
}

const App: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const handleSaveTemplate = (template: Template) => {
    setTemplates([...templates, template]);
  };

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
  };

  return (
    <div>
      <h1>Email Template Generator</h1>
      <EmailTemplateForm onSave={handleSaveTemplate} />
      <TemplateList templates={templates} onSelect={handleSelectTemplate} />
      {selectedTemplate && (
        <div>
          <h2>Selected Template</h2>
          <p><strong>Subject:</strong> {selectedTemplate.subject}</p>
          <p><strong>Body:</strong></p>
          <p>{selectedTemplate.body}</p>
        </div>
      )}
    </div>
  );
};

export default App;
