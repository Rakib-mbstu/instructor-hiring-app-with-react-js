import Button from "react-bootstrap/Button";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function SideBarMenu() {
  return (
    <>
      <Sidebar
        rootStyles={{
          backgroundColor: "red",
        }}
      >
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <Button variant="primary mb-2">Submit</Button>
        </Menu>
      </Sidebar>
    </>
  );
}
