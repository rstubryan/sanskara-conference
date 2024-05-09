import BaseInput from "../../atoms/Input/index.jsx";

const IdentityForm = () => {
  return (
    <>
      <section id="form-identity">
        <h1 className="text-black text-xl font-semibold text-start mb-3">
          Identity
        </h1>

        <div className="space-y-3">
          <BaseInput name="name" type="name" label="Name" />
          <BaseInput name="email" type="email" label="Email" />
          <BaseInput name="phone" type="text" label="Phone" />
          <BaseInput name="country" type="text" label="Country" />
          <BaseInput name="profession" type="text" label="Profession" />
          <BaseInput name="institution" type="text" label="Institution" />
        </div>
      </section>
    </>
  );
};

export default IdentityForm;
