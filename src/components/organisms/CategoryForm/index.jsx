import BaseSelect from "../../atoms/Select/index.jsx";

const CategoryForm = ({ color }) => {
  return (
    <>
      <section className="w-full">
        <div className="space-y-6">
          <BaseSelect
            color={color}
            label="Indonesia / International"
            options={["Indonesia", "International"]}
          />
          <BaseSelect
            color={color}
            label="Presenter / Audience"
            options={["Presenter", "Audience"]}
          />
          <BaseSelect
            color={color}
            label="Onsite / Online"
            options={["Onsite", "Online"]}
          />
        </div>
      </section>
    </>
  );
};

export default CategoryForm;
