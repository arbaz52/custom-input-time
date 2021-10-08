import { ChangeEvent, FC, useState } from "react";

const App: FC = () => {
  const [state, setState] = useState("");
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = ev;

    let result = value;

    const [hh, mm] = value.split(":");
    const [nhh, nmm] = [hh ? Number(hh) : 0, mm ? Number(mm) : 0];

    /**
     * if they're not valid, no need to update the state
     */
    if (
      (hh && (Number(hh) > 12 || hh.length > 2)) ||
      (mm && (Number(mm) > 59 || mm.length > 2))
    )
      return;

    /**
     * if separator does not exist and hour digits are >2
     * need to add a separator
     */
    if (!value.includes(":") && hh && (hh.length >= 2 || nhh > 1))
      result += ":";

    setState(result);
  };

  return (
    <input
      type="text"
      placeholder="hh:mm"
      minLength={0}
      maxLength={5}
      value={state}
      onChange={handleChange}
    />
  );
};

export default App;
