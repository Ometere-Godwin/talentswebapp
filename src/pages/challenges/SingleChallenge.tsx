import BaseButton from "../../components/BaseButton";
import styles from "../../styles/Challenge.module.css"
import BaseText from "../../components/BaseText";
import SvgComponent from "../../components/SVGShape";
import BasePillButton from "../../components/Table/BasePillButton";
import { NavigateFunction, useNavigate } from "react-router-dom";

export default function SingleChallenge() {
  const navigate: NavigateFunction = useNavigate();


  const viewTeams = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    navigate("/challenges/profile/teams");

  }

  const roles = [
    {
      id: "PM",
      title: "Product Manager",
      content: "To join as a partner on TalentNest, you can sign up and create an account as a partner. Once your account is verified and approved, you will have access to our pool of talented individuals who are actively gaining work experience through our challenges."
    },
    {
      id: "PD",
      title: "Product Designer",
      content: "As a partner on TalentNest, you will have access to a pool of talented individuals who have participated in our challenges and gained valuable work experience. This provides you with an opportunity to engage with potential candidates who are passionate about their field and have demonstrated their skills through practical challenges."
    },
    {
      id: "FD",
      title: "Front-end Developer",
      content:"Developing the user interface of online marketplace to buy, sell goods, manage your inventory and sales. Online marketplace to buy, sell goods, manage your inventory and sales. "
    },
    {
      id: "BD",
      title: "Back-end Developer",
      content: "Currently, TalentNest focuses on providing work experience opportunities through challenges rather than hosting job openings or internships directly on our platform. However, you can engage with talented individuals and discuss potential job or internship opportunities based on their skills and experience gained through the challenges."
    },
    {
      id: "DE",
      title: "Data Engineer",
      content: "TalentNest carefully selects and reviews individuals who participate in our challenges to ensure their skills and capabilities. While we strive to maintain a high-quality pool of talents, we recommend engaging in conversations and assessing their profiles and past challenge performance to evaluate their suitability for your specific requirements."
    },
    {
      id: "QA",
      title: "Software QA Engineer",
      content: "TalentNest carefully selects and reviews individuals who participate in our challenges to ensure their skills and capabilities. While we strive to maintain a high-quality pool of talents, we recommend engaging in conversations and assessing their profiles and past challenge performance to evaluate their suitability for your specific requirements."
    }
  ]

  const renderRoleDetails = () => {
    return (roles.map(item => <div key={item.id} className={`${styles["collapsible-accordion"]}`}>
    <div className={`${styles["collapsible-item"]}`}>
      <input type="radio" id={item.id} name="radio" />
      <label
        className={`${styles["collapsible-item-label"]} focus:text-blue-900`}
        htmlFor={item.id}
      >
           <BaseText size="small" weight="medium">
           {item.title}
        </BaseText>
       
      </label>
      <div className={`${styles["collapsible-item-content"]}`}>
      <BaseText weight="medium" size="small" color="gray">
          <p className="leading-5">
          {item.content}
          </p>
        </BaseText>
      <div className="flex justify-between items-center pt-8">
        <div className="flex justify-start items-baseline gap-3">
        <BaseText size="small" weight="semibold">
        Deliverables:
        </BaseText>
        <ul>
          <li>
          <BaseText size="smaller">
          Github Repository
          </BaseText>
          </li>
          <li>
          <BaseText size="smaller">
          Live project
          </BaseText>
          </li>
        </ul>
        </div>
        <div className="flex justify-start items-baseline gap-3">
        <BaseText size="small" weight="semibold">
        Timeline:
        </BaseText>
        <ul>
          <li>
          <BaseText size="smaller">
          15days
          </BaseText>
          </li>
        </ul>
        </div>
        <div className="flex justify-center items-baseline gap-3">
        <BaseText size="small" weight="semibold">
        Reports to:
        </BaseText>
        <ul>
          <li>
          <BaseText size="smaller">
          Product Manager
          </BaseText>
          </li>
          <li>
          <BaseText size="smaller">
          Engineering Lead
          </BaseText>
          </li>
        </ul>
        </div>
      </div>
      </div>
    </div>
  </div>))
  }

  return (
    <div className="md:w-10/12 lg:pl-16">
      <div className="flex items-center gap-4 justify-between">
        <div>
          <BaseText weight="semibold" size="xx-large" extraClasses="pb-2">
            Challenges
          </BaseText>
          <BaseText size="small" color="gray">
            Take on an challenge to prove your skill.
          </BaseText>
        </div>
      </div>
      <div className="flex items-center mt-8 pb-8 gap-4 justify-between">
        <div className="text-end flex flex-col items-start gap-4">
          <div className="flex justify-start items-center gap-2">
            <BaseText weight="semibold" size="large" color="blue">
              E-Commerce Web Application
            </BaseText>
            <BasePillButton
              handleEngagement={(e) => void e}
              bgColor="#F9B71280"
            >
              <BaseText size="xs-small">
                <p className="text-[10px]">ECommerce</p>
              </BaseText>
            </BasePillButton>
          </div>

          <BaseText size="small" color="gray">
            Online marketplace to buy, sell goods, manage your inventory and
            sales.
          </BaseText>
        </div>
        <div className="text-end pr-4 flex flex-col items-end gap-4">
          <BaseButton handleEngagement={(e) => viewTeams(e)} size="small">
            <BaseText weight="semibold" size="small">
              Join a team
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
            This challenge is to be completed in 30 days.{" "}
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
        <BaseText weight="normal" size="small" extraClasses="pr-24">
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
        <div className="pr-24">
          { renderRoleDetails()}
        </div>
      </div>
      <hr />
      <div className="flex items-end mt-8 pb-8 gap-4 justify-between">
        <div className="text-end flex flex-col items-start">
        <BaseText weight="semibold" size="large" color="blue">
        Important Notes            </BaseText>
        <ul className="list-['-'] ml-2">
          <li className="py-3 pl-2">
          <BaseText size="small" color="gray">
            Online marketplace to buy, sell goods, manage your inventory and
            sales.
          </BaseText>
          </li>
          <li>
          <BaseText size="small" color="gray">
            Online marketplace to buy, sell goods, manage your inventory and
            sales.
          </BaseText>
          </li>
        </ul>
        
        </div>
        <div className="text-end pr-4 flex flex-col items-end gap-4">
          <BaseButton handleEngagement={(e) => void e} >
            <BaseText weight="semibold" size="small">
            Share Challenge
            </BaseText>
          </BaseButton>
          <BaseText weight="medium" size="small">
            Project Timeline: 30days
          </BaseText>
        </div>
      </div>
    </div>
  );
}
