# Password Show/Hide Toggle
Component for showing/hiding passwords in password fields.


## Code
```ts
import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";
export const PasswordShowHideToggle = ({
  inputElementId,
}: {
  inputElementId: string;
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById(inputElementId);
    if (passwordInput) {
      const newType = isPasswordVisible ? "password" : "text";
      passwordInput.setAttribute("type", newType);
      setIsPasswordVisible(!isPasswordVisible);
    }
  };

  return (
    <div
      onClick={togglePasswordVisibility}
      className="hover:cursor-pointer hover:text-primary-foreground ease-in-out duration-150"
    >
      {isPasswordVisible ? <EyeOff /> : <EyeIcon />}
    </div>
  );
};
```

## Usage
::: info
This component is used in conjunction with the shadcn [InputField](https://ui.shadcn.com/docs/components/input) component and the [react-hook-form](https://react-hook-form.com/) library.
:::
```tsx
<div className="relative">
  <Input
    type="password"
    id="newPassword"
    label="New Password"
    {...register("newPassword")}
    onChange={(e) => setValue("newPassword", e.target.value)}
    errorMessage={errors.newPassword?.message?.toString()}
  />
  <div className="absolute inset-y-0 right-2 top-6 flex items-center">
    <PasswordShowHideToggle inputElementId="newPassword" />
  </div>
</div>
```
