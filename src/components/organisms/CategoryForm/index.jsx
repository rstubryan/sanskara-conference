import BaseSelect from "../../atoms/Select/index.jsx";

const CategoryForm = () => {
  return (
    <>
      <section id="category">
        <h1 className="text-black text-xl font-semibold text-start mb-3">
          Category
        </h1>

        <div className="space-y-3">
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
