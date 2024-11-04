import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
  const name = "price";
  return (
    <div className="mb-2">
      <Label htmlFor="price" className="capitalize">
        Price (DKK)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}
export default PriceInput;
