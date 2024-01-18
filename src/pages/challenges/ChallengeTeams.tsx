import { useEffect, useState } from "react";
import BaseButton from "../../components/BaseButton";
import BaseModal from "../../components/BaseModal";
import BaseText from "../../components/BaseText";
import SvgComponent from "../../components/SVGShape";
import BasePillButton from "../../components/Table/BasePillButton";
import Pagination from "../../components/Table/Pagination";
import BaseChallengeTeamCard from "../../components/Teams/BaseChalllengeTeamCard";
import BaseCheckBox2 from "../../components/Form/BaseCheckbox2";
import { optionFormat, teamCardEngagementCategory } from "../../interfaces";
import BaseSelectBox from "../../components/Form/BaseSelectBox";

export default function ChallengeTeams() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isTeamsModalOpen, setIsTeamsModalOpen] = useState(false);
  const [userRole, setUserRole] = useState('')
  const [acceptTnC, setAcceptTnC] = useState(false)
  const [isJoining, setIsJoining] = useState(false);

  const selectOptions: optionFormat[] = [
    {
        label: 'Engineer',
        value: 'engineer'
    },
    {
        label: 'Designer',
        value: 'designer'
    }
  ]

  const userCanJoinTeam = userRole.trim().length > 3 && acceptTnC;

  const handleUserClick = (arg: teamCardEngagementCategory ) => {
    setIsTeamsModalOpen(true)
    if (arg === 'join') {
      setIsJoining(true)
    }
  }

  useEffect(() => {
    if (isSuccessModalOpen) {
      setTimeout(() => {
        setIsSuccessModalOpen(false)
      }, 10000)
    }
  }, [isSuccessModalOpen])
  
  useEffect(() => {
    if (!isTeamsModalOpen) {
      setIsJoining(false)
    }
  }, [isTeamsModalOpen])

  const renderAvailableTeams = () => {
    const fixedValue = 6;
    return Array.from({ length: fixedValue }).map((item, index) => (
      <BaseChallengeTeamCard
        key={index}
        handleEngagement={(arg) => handleUserClick(arg)}
        mode="challenge"
        projectName="Defenders"
        theme="pink"
        teamName="Happy People"
        dueDate="12th Feb."
        progress={30}
        projectDescription="Online marketplace to buy, sell goods, manage your inventory and sales. Online marketplace to buy, sell goods, manage your inventory and sales.."
      />
    ));
  };


  const handleCloseModal = (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // setIsSuccessModalOpen(false);
    setIsTeamsModalOpen(false);
  };


  const initiateUserJoin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isJoining) {
      setIsTeamsModalOpen(false)
      setIsSuccessModalOpen(true)
    } else {
      setIsJoining(true)
    }
  }

  const generateDummyData = (count: number) => {
    const dummyData = [];

    for (let i = 1; i <= count; i++) {
      dummyData.push({
        id: i,
        name: `Item ${i}`,
        value: Math.random() * 100, // Example: Random numeric value
        description: `Description for Item ${i}`,
      });
    }

    return dummyData;
  };

  // Example: Generate an array of 5 dummy objects
  const dummyArray = generateDummyData(11);

  return (
    <div className=" lg:pl-12">
      <div className="flex items-center gap-4 justify-between">
        <div onClick={() => setIsTeamsModalOpen(true)}>
          <BaseText weight="semibold" size="xx-large" extraClasses="pb-2">
            Challenges
          </BaseText>
          <BaseText size="small" color="gray">
            Take on an challenge to prove your skill.
          </BaseText>
        </div>
      </div>
      <div className="flex items-center mt-8 pb-8 gap-4 justify-between">
        <div className="lg:text-end flex flex-col items-start gap-4">
          <div className="flex justify-start items-center gap-2">
            <BaseText weight="semibold" size="large" color="blue">
              Available teams on this challenge
            </BaseText>
            <BasePillButton
              handleEngagement={(e) => void e}
              small
              bgColor="#F9B71280"
            >
            <span className="text-[10px]">ECommerce</span>

            </BasePillButton>
          </div>

          <BaseText size="small" color="gray">
            Online marketplace to buy, sell goods, manage your inventory and
            sales.
          </BaseText>
        </div>
        <div className="text-end pr-4 flex flex-col items-end gap-4">
          <BaseButton handleEngagement={(e) => void e}>
            <BaseText weight="semibold" size="small">
              View Challenge
            </BaseText>
          </BaseButton>
          <BaseText size="small" weight="medium">
            Project Timeline: 30days
          </BaseText>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-start gap-4 my-8">
        <div className="flex gap-3 items-center">
          <SvgComponent icon="people" iconActive justPeople />

          <BaseText size="small">6 team members needed</BaseText>
        </div>
        <div className="flex gap-3 items-center">
          <SvgComponent icon="schedule" />

          <BaseText size="small">
            This challenge is to be completed in 30 days.
          </BaseText>
        </div>
        <div className="flex gap-3 items-center">
          <SvgComponent icon="fact-check" />

          <BaseText size="small">6 team members needed</BaseText>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 my-8">
        <BaseText size="small" weight="semibold">
          Challenge Summary
        </BaseText>
        <BaseText weight="normal" size="small" extraClasses="lg:pr-24 sm:pr-4">
          <span className="leading-5">
            Online marketplace to buy, sell goods, manage your inventory and
            sales Online marketplace to buy, sell goods, manage your inventory
            and sales. Online marketplace to buy, sell goods, manage your
            inventory and sales. Online marketplace to buy, sell goods, manage
            your inventory and sales. Online marketplace to buy, sell goods,
            manage your inventory and sales. Online marketplace to buy, sell
            goods, manage your inventory and sales. Online marketplace to buy,
            sell goods, manage your inventory and sales. Online marketplace to
            buy, sell goods, manage your inventory and sales. Online marketplace
            to buy, sell goods, manage your inventory and sales. Online
            marketplace to buy, sell goods, manage your inventory and sales..
          </span>
        </BaseText>
      </div>
      <div className="flex flex-col items-start gap-4 my-8">
        <BaseText size="small" weight="semibold">
          Roles, Responsibilities, and Timelines
        </BaseText>
        <div className="grid grid-cols-2 gap-8 lg:pr-24 sm:pr-4 w-full">
          {renderAvailableTeams()}
        </div>
      </div>
      <hr />
      <div>
        <Pagination dataItems={dummyArray} setContents={() => console.log()} />
        {/* MODALS BELOW HERE */}
{isSuccessModalOpen && <BaseModal isOpen={isSuccessModalOpen} onClose={handleCloseModal} boxWidth="max-w-lg">
          <div className="flex flex-col text-center px-8 justify-center items-center gap-4">
            <div className="bg-[#04329914] w-[100px] h-[100px] rounded-md flex justify-center items-center">
              <SvgComponent icon="star" />
            </div>
            <BaseText size="x-large" weight="bold">
              You have joined the team successfully
            </BaseText>
            <BaseText size="smaller" weight="normal" extraClasses="py-4">
              You can now interact with your team members and start contributing
              to the project.
            </BaseText>
            <BaseButton
              handleEngagement={(e) => {
                e.preventDefault();
                setIsSuccessModalOpen(false);
                setIsJoining(false);
                setIsTeamsModalOpen(true);
              }}
              size="small"
            >
              <BaseText weight="semibold" size="small">
                View Team
              </BaseText>
            </BaseButton>
          </div>
        </BaseModal>}

       {isTeamsModalOpen && <BaseModal isOpen={isTeamsModalOpen} onClose={handleCloseModal}  boxWidth={isJoining ? "max-w-xl" : "max-w-3xl"}>
          <div className="flex flex-col justify-center items-center gap-4 p-10">
            <BaseText size="x-large" weight="bold" extraClasses="text-center">
             { isJoining ? 'Do you want to join this challenge?' : 'Team A00001'}
            </BaseText>
           {isJoining ? <div className="text-left px-12">
            <BaseText size="small" weight="normal" extraClasses="py-4">
            What is your role?
            </BaseText>
            <BaseSelectBox options={selectOptions} onSelection={(arg) => setUserRole(arg)}/>
            <div className="mb-4 ml-2 flex justify-between ">
        <BaseCheckBox2 gray emitChangeEvent={(arg) => setAcceptTnC(arg)}/>
        <BaseText size="xs-small" weight="normal" extraClasses="pt-4 pl-4">
        I have read, understood my responsibilities and can meet up with my deliverables            </BaseText>        </div>
           </div> : <div className="w-full xl:w-full mb-12 transition rounded-3xl ease-in-out delay-150 hover:shadow-sm mb-8">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded-sm w-full mb-6 shadow-sm rounded ">
                <div className="block w-full overflow-x-auto">
                  <table className="items-center bg-transparent w-full border  ">
                    <thead className="border-b-2 border-dark-100">
                      <tr>
                        <th className="px-6 text-blueGray-500 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                          Name
                        </th>
                        <th className="px-6 text-blueGray-500 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                          Role
                        </th>
                        <th className="px-6 text-blueGray-500 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                          Level
                        </th>
                        <th className="px-6 text-blueGray-500 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b-2 border-dark-100 hover:bg-gray-100">
                        <td className=" px-6 align-middle text-xs whitespace-nowrap p-4 flex justify-start items-center gap-4">
                          <img
                            className="inline-block h-10 w-10 rounded-full transition-transform transform hover:scale-110 hover:z-10"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="flex flex-col items-start justify-center gap-2">
                            <BaseText
                              size="small"
                              weight="medium"
                              extraClasses="text-center"
                            >
                              Mary Doe
                            </BaseText>
                            <BaseText
                              size="small"
                              weight="normal"
                              extraClasses="text-center"
                            >
                              @Mary
                            </BaseText>
                          </div>
                        </td>
                        <td className=" px-6 align-center text-xs whitespace-nowrap p-4">
                          Product Manager
                        </td>
                        <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                          Raising star
                        </td>
                        <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                        
                          <BasePillButton
                            handleEngagement={(e) => void e}
                            text="View Profile"
                          />
                        </td>
                      </tr>
                      <tr className="border-b-2 border-dark-100 hover:bg-gray-100">
                        <td className=" px-6 align-middle text-xs whitespace-nowrap p-4 flex justify-start items-center gap-4">
                          <img
                            className="inline-block h-10 w-10 rounded-full transition-transform transform hover:scale-110 hover:z-10"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div className="flex flex-col items-start justify-center gap-2">
                            <BaseText
                              size="small"
                              weight="medium"
                              extraClasses="text-center"
                            >
                              Mary Doe
                            </BaseText>
                            <BaseText
                              size="small"
                              weight="normal"
                              extraClasses="text-center"
                            >
                              @Mary
                            </BaseText>
                          </div>
                        </td>
                        <td className=" px-6 align-center text-xs whitespace-nowrap p-4">
                          Product Manager
                        </td>
                        <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                          Raising star
                        </td>
                        <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                        
                          <BasePillButton
                            handleEngagement={(e) => void e}
                            text="View Profile"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div> }
            <div className="flex justify-center items-center py-6 gap-4">
              <BaseButton
                handleEngagement={(e) => handleCloseModal(e)}
                size="small"
                taller
                mode="outline"
              >
                <BaseText weight="semibold" size="small">
                  Back
                </BaseText>
              </BaseButton>
              <BaseButton disabled={isJoining && !userCanJoinTeam} handleEngagement={(e) => initiateUserJoin(e)} size="small">
                <BaseText weight="semibold" size="small">
                  Join Team
                </BaseText>
              </BaseButton>
            </div>
          </div>
        </BaseModal>}

        {/* MODALS ABOVE HERE */}
      </div>
    </div>
  );
}
