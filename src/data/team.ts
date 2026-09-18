export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  isOpenPosition?: boolean;
}

export const team: TeamMember[] = [
  {
    id: "elias-thorne",
    name: "Elias Thorne",
    role: "Founder & Lead Engineer",
    image: "/images/team/member-1.svg",
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Head of Design",
    image: "/images/team/member-2.svg",
  },
  {
    id: "marcus-vane",
    name: "Marcus Vane",
    role: "Systems Architect",
    image: "/images/team/member-3.svg",
  },
  {
    id: "open-position",
    name: "Open Position",
    role: "UX Researcher",
    image: "",
    isOpenPosition: true,
  },
];
