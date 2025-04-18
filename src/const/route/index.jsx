import AboutUs from "../../pages/AboutUs";
import FacilitiesServices from "../../pages/FacilitiesServices";
import Gallery from "../../pages/Gallery";
import Home from "../../pages/Home";
import Location from "../../pages/Location";
import Room from "../../pages/Room";
import ThingToDo from "../../pages/ThingToDo";

export const route = [
    {
        path : "/",
        element : <Home />,
    },
    {
        path : "/aboutus",
        element : <AboutUs />,
    },
    {
        path : "/room",
        element : <Room />,
    },
    {
        path : "/services",
        element : <FacilitiesServices />,
    },
    {
        path : "/thingtodo",
        element : <ThingToDo />,
    },
    {
        path : "/gallery",
        element : <Gallery />,
    },
    {
        path : "/location",
        element : <Location />,
    }
]