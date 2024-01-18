import BaseText from "../../components/BaseText";
import BaseCheckBox2 from "../../components/Form/BaseCheckbox2";
import CustomDropDown from "../../components/Form/CustomDropDown";

export default function NotificationsSettings() {

  return (
    <div>
        <div className="flex justify-between items-end ">
            <div>
                <BaseText size="large" weight="semibold">Notification Preference</BaseText>
            </div>
            <CustomDropDown id="number1" emitSelectedOption={(arg) => void(arg)}/>
        </div>
        <div className="flex justify-between my-8 items-end ">
            <div>
                <BaseText size="large" weight="semibold">TalentNest Digest</BaseText>
                <BaseText size="small" weight="normal" extraClasses="pt-4 pr-8">The best stories on Talentnest personalized based on your interests,
                 as well as outstanding stories selected by our editors.</BaseText>

            </div>
            <CustomDropDown id="number2" emitSelectedOption={(arg) => void(arg)}/>
        </div>
        <div className="flex justify-between my-8  items-end ">
            <div>
                <BaseText size="large" weight="semibold">Team updates and messages</BaseText>
            </div>
            <BaseCheckBox2 emitChangeEvent={(value) => console.log(value)}/>
        </div>
        <div className="flex justify-between my-8  items-end ">
            <div>
                <BaseText size="large" weight="semibold">New challenges</BaseText>
            </div>
            <BaseCheckBox2 emitChangeEvent={(value) => console.log(value)}/>
        </div>
        <div className="flex justify-between my-8  items-end ">
            <div>
                <BaseText size="large" weight="semibold">Ratings and updates</BaseText>
            </div>
            <BaseCheckBox2 emitChangeEvent={(value) => console.log(value)}/>
        </div>
        <div className="flex justify-between my-8  items-end ">
            <div>
                <BaseText size="large" weight="semibold">New assessments</BaseText>
            </div>
            <BaseCheckBox2 emitChangeEvent={(value) => console.log(value)}/>
        </div>
        <div className="flex justify-between my-8  items-end ">
            <div>
                <BaseText size="large" weight="semibold">New message</BaseText>
            </div>
            <BaseCheckBox2 emitChangeEvent={(value) => console.log(value)}/>
        </div>
        <div className="flex justify-between my-8  items-end ">
            <div>
                <BaseText size="large" weight="semibold">Ratings and updates</BaseText>
            </div>
            <BaseCheckBox2 emitChangeEvent={(value) => console.log(value)}/>
        </div>
    </div>
  );
}