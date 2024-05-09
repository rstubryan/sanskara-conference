import BaseSelect from "../../atoms/Select/index.jsx";

const CategoryForm = () => {
  return (
    <>
      <section className="w-full">
        <div className="space-y-6">
          <BaseSelect
            label="Indonesia / International"
            options={["Indonesia", "International"]}
          />
          <BaseSelect
            label="Presenter / Audience"
            options={["Presenter", "Audience"]}
          />
          <BaseSelect label="Onsite / Online" options={["Onsite", "Online"]} />
        </div>
      </section>
    </>
  );
};

export default CategoryForm;
