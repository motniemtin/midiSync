import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "@/store/hooks";
import NavItem from "./NavItem";
import NavCollapse from "./NavCollapse";
import NavGroup from "./NavGroup/NavGroup";
import { AppState } from "@/store/store";
import { toggleMobileSidebar } from "@/store/customizer/CustomizerSlice";
import {
  IconCloudUp
} from "@tabler/icons-react";
import { uniqueId } from "lodash";
import { useUserLogin } from "@/services/user/useUserLogin";
const SidebarItems = () => {
  const pathname = usePathname();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf("/"));
  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const hideMenu: any = lgUp
    ? customizer.isCollapse && !customizer.isSidebarHover
    : "";
  const dispatch = useDispatch();

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        <NavItem
          item={{
            id: uniqueId(),
            title: "UPLOAD FILE",
            icon: IconCloudUp,
            href: "/upload",
            chip: "*.mid",
            chipColor: "secondary",
          }}
          key={1}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={() => dispatch(toggleMobileSidebar())}
        />
      </List>
    </Box>
  );
};
export default SidebarItems;
