import {FC} from "react";

type DarkModeToggleProps = {
    isDark: boolean
    onChange: any
}
const DarkModeToggle: FC<DarkModeToggleProps> = ({isDark, onChange}) => {
    return <div>
        Dark Mode
        <input type="checkbox" checked={isDark}
               onChange={onChange}
        />
    </div>
}

export default DarkModeToggle