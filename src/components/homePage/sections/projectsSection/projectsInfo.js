
import electrical from '../../../../images/project-section/electric-wires.jpg';
import cabinetry from '../../../../images/project-section/kitchen-cabinet.jpg';
import plumbing from '../../../../images/project-section/plumbing-install.jpg';
import sink from '../../../../images/project-section/sink-leaking.jpg';
import tile from '../../../../images/project-section/tile-installation.jpg';
import flooring from '../../../../images/project-section/panel-flooring-installation.jpg';
import underConstruction from '../../../../images/project-section/under-construction.jpg';
// TYPES
//  - electrical
//  - cabinetry
//  - flooring
//  - plumbing

var projectsData = () => [
    {
        id: 1,
        type: 'cabinetry',
        img: cabinetry,
        alt: 'Kitchen Cabinets',
        header: 'Cabinetry',
        location: 'Orange, CA',
        toggleActive: true
    },
    {
        id: 2,
        type: 'plumbing',
        img: plumbing,
        alt: 'Eletrical Wires',
        header: 'Plumbing',
        location: 'Huntington Beach, CA',
        toggleActive: true
    },
    {
        id: 3,
        type: 'electrical',
        img: electrical,
        alt: 'Eletrical Wires',
        header: 'Electrical',
        location: 'Portland, OR',
        toggleActive: true
    },
    {
        id: 4,
        type: 'plumbing',
        img: sink,
        alt: 'Kitchen Sink',
        header: 'Kitchen Appliances',
        location: 'Newport Beach, CA',
        toggleActive: true
    },
    {
        id: 5,
        type: 'flooring',
        img: tile,
        alt: 'Flooring',
        header: 'Flooring',
        location: 'Garden Grove, CA',
        toggleActive: true
    },
    {
        id: 6,
        type: 'flooring',
        img: flooring,
        alt: 'Laminate Flooring',
        header: 'Laminate Flooring',
        location: 'Yorba Linda, CA',
        toggleActive: true
    },
    {
        id: 7,
        type: 'emptyProject',
        img: underConstruction,
        alt: 'Construction Area',
        header: 'OOPS!',
        location: 'Still Under Construction',
        toggleActive: false
    }
];

export default projectsData;