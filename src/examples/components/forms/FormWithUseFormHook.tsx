import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../buttons/Button";

interface IFormData {
  name: string;
  age: number;
}

export const FormWithUseFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <hr />
      <h1 className="my-3">Form with useForm Hook</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">This field is required</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">
              This field must contain 3 and more characters
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { required: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age?.type === "required" && (
            <p className="text-danger">This field is required</p>
          )}
        </div>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};
