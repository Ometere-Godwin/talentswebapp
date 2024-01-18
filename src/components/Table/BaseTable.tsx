import BaseText from "../BaseText";
import SvgComponent from "../SVGShape";
import BasePillButton from "./BasePillButton";
import Pagination from "./Pagination";

interface TableProps {
    tableTitle: string,
    tableData: any[], // make this mandatory
    tableLabels: string[],// make this mandatory
  }

  
const BaseTable: React.FC<TableProps> = ({ tableTitle, tableData, tableLabels }) => {

    const handleTable = (e:any) => {

    }
    
  return (
<section className="py-1">
<div className="w-full xl:w-full mb-12 shadow-md transition rounded-3xl ease-in-out delay-150 hover:shadow-xl mb-8">
  <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full pl-2 max-w-full flex-grow py-4 flex-1">
          <BaseText weight="semibold">{ tableTitle }</BaseText>
        </div>
      
      </div>
    </div>
   { tableData.length > 0 ? <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead className="border-b-2 border-dark-100">
          <tr>
            {
                tableLabels.map(item => <th key={item} className="px-6 text-blueGray-500 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                { item }
              </th>)
            }
          </tr>
        </thead>

        <tbody>
        {
                tableData.map((item, index) => <tr key={item} className="border-b-2 border-dark-100 hover:bg-gray-300">
                <th className="align-middle w-min text-xs whitespace-nowrap p-4 text-left ">
                  { index + 1}
                </th>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4 ">
                  { item.description}
                </td>
                <td className=" px-6 align-center text-xs whitespace-nowrap p-4">
                  { item.role }
                </td>
                <td className=" px-6 align-middle text-xs whitespace-nowrap p-4">
                 <BasePillButton handleEngagement={(e) => void(e)} text="View"/>
                </td>2
              </tr>)
            }
        </tbody>
        <Pagination dataItems={[12,2,323]} setContents={(e) => handleTable('fd')}/>
      </table>
    </div> : <div className="flex flex-col gap-2 pb-8 items-center justify-center h-48">
    <SvgComponent icon='file-searching'/>
            <BaseText weight="medium">No challenge taken yet.</BaseText>
            <BaseText color="gray" weight="normal" size="small">Your challenge history will show here</BaseText>
    </div>}
  </div>
</div>
</section>
  );
}

export default BaseTable;
