import React from 'react'
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


export const SidebarData = [
    {
        title: "Dashboard",
        icon: <PieChartOutlineIcon />,
        link: "/dashboard",
    },
    {
        title: "Empanelment Case Requests",
        icon: <TextSnippetIcon />,
        link: "/empanelment-case-requests",
    },
    {
        title: "My Documents",
        icon: <DescriptionIcon />,
        link: "/documents",
    },
    {
        title: "Profile",
        icon: <PersonIcon/>,
        link: "/profile",
    },
    {
        title: "Support",
        icon: <SupportAgentIcon />,
        link: "/support",
    },
]

