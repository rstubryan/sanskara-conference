import BaseInput from "../../atoms/Input/index.jsx";

const IdentityForm = ({ color }) => {
  return (
    <>
      <div className="space-y-6">
        <BaseInput color={color} name="name" type="name" label="Name" />
        <BaseInput color={color} name="email" type="email" label="Email" />
        <BaseInput color={color} name="phone" type="text" label="Phone" />
        <BaseInput color={color} name="country" type="text" label="Country" />
        <BaseInput
          color={color}
          name="profession"
          type="text"
          label="Profession"
        />
        <BaseInput
          color={color}
          name="institution"
          type="text"
          label="Institution"
        />
      </div>
    </>
  );
};

export default IdentityForm;
