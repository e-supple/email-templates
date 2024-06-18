import * as React, { useState } from "react";
import { PrimaryButton, TextField } from "office-ui-fabric-react";

interface Template {
  name: string;
  subject: string;
  body: string;
}

interface EmailTemplateFormProps {
  onSave: (template: Template) => void;
}

const EmailTemplateForm: React.FC<EmailTemplateFormProps> = ({ onSave }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    onSave({ name, subject, body });
    setName("");
    setSubject("");
    setBody("");
  };

  return (
    <div>
      <TextField label="Template Name" value={name} onChange={(e, newValue) => setName(newValue || "")} />
      <TextField label="Subject" value={subject} onChange={(e, newValue) => setSubject(newValue || "")} />
      <TextField label="Body" multiline rows={10} value={body} onChange={(e, newValue) => setBody(newValue || "")} />
      <PrimaryButton text="Save Template" onClick={handleSubmit} />
    </div>
  );
};

export default EmailTemplateForm;
