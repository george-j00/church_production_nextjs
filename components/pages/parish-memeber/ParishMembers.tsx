import { ParishTeamParams } from "@/types";
import React from "react";

type ParishTeamsProps = {
  people : ParishTeamParams[]
}
const ParishMembersListPage = ({people} : ParishTeamsProps) => {
  // Define the list of parish members
  // const parishMembers = [
  //   "Abraham Mathew",
  //   "Abraham A P",
  //   "Abraham K John",
  //   "Adv. Ajit K Chacko",
  //   "Ashok Kunnath Abraham",
  //   "M K Baby",
  //   "Benny P A",
  //   "Biju Varghese",
  //   "Binil Kuruvilla",
  //   "Binoy John",
  //   "C Cherian",
  //   "Cherian V N",
  //   "Dennis Chacko",
  //   "Eliot Johnson",
  //   "Eldo Joy",
  //   "Eldhose C T",
  //   "George A J",
  //   "V U George",
  //   "George P I",
  //   "Giji P Issac",
  //   "Com. Isac E P",
  //   "James P J",
  //   "Com. Adv. A C Jayaraj",
  //   "James K T",
  //   "Chev. Dr. Joe Verghese",
  //   "Jolly Mathew",
  //   "Johnson Chacko P S",
  //   "John Thomas",
  //   "P J Joy",
  //   "John J Mathew",
  //   "Adv. Kishor Kumar A C",
  //   "Kurian P P",
  //   "Lukose Mathew",
  //   "Leo K Thomas",
  //   "Dr. Mathew Thomas",
  //   "Mathewkutty V G",
  //   "Nelson Kuruvilla",
  //   "M C Paul",
  //   "Philip C C",
  //   "Prashanth Chacko S",
  //   "Rajesh P J",
  //   "Reji Mathew",
  //   "Rinu Thomas",
  //   "Rijo John",
  //   "Rev. Fr. Roji Mathew",
  //   "Rumise A Markose",
  //   "Sabu Jacob",
  //   "Saleeba Mathew",
  //   "Santhosh Mathew",
  //   "Sanoj K C",
  //   "Dr. Sanjith P Simon",
  //   "Shaji Joseph",
  //   "V U Seemon",
  //   "Siju Daniel",
  //   "Sleeba Mathew C",
  //   "Steephan M I",
  //   "Stella Abraham",
  //   "Adv. Sunny John",
  //   "Dr. Thangam Verghese Joshua",
  //   "Thomas A I",
  //   "Thomas (Biju)",
  //   "Thankey Rajan",
  //   "Udayan (Abraham V V)",
  //   "V A Varkey",
  //   "K J Valson",
  //   "Varghese E P",
  //   "Varghese P P",
  //   "Dr. Verghese Joe",
  //   "Varghese K J",
  //   "Dr. Varghese George",
  //   "Adv. A C Vinayaraj",
  // ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {people?.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <p className="text-lg font-semibold text-center">{member.name}</p>
            <p className="text-lg font-semibold text-center">{member.houseName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParishMembersListPage;
