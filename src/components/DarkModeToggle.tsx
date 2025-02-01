import {FC} from "react";

type DarkModeToggleProps = {
    isDark: boolean
    onChange: () => void
}
const DarkModeToggle: FC<DarkModeToggleProps> = ({isDark, onChange}) => {
    return <div className="toggle-wrapper">
    <input type="checkbox" id="toggle" className="toggle-input" checked={isDark} onChange={onChange}/>
    <label htmlFor="toggle" className="toggle-label"></label>
</div>
}

export default DarkModeToggle