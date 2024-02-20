import { FormEvent, useState } from "react";
import { Button } from "../buttons/Button";

interface IFormData {
  name: string;
  age: string | number;
}

export const FormControlledComponents = () => {
  const [person, setPerson] = useState<IFormData>({ name: "", age: "" });

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log(person);
  };

  return (
    <>
      <hr />
      <h1 className="my-3">Form with Controlled Components</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(evt) => setPerson({ ...person, name: evt.target.value })}
            value={person.name}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(evt) =>
              setPerson({ ...person, age: parseInt(evt.target.value) })
            }
            value={person.age}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};
