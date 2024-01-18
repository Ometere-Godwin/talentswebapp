import { FC, useEffect, useState } from "react";
import BaseButton from "../BaseButton";
import SvgComponent from "../SVGShape";
import BaseText from "../BaseText";

const itemsPerPage = 2; // Number of items to display per page

interface BasePaginationProps {
    dataItems: any[],
    setContents: (arg0: any) => void;
}

const Pagination: FC<BasePaginationProps> = ({ setContents, dataItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = dataItems;
  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const isLastPage = indexOfLastItem >= data.length;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (direction:string, pageNumber?:number) => {
    if (pageNumber) {
      setCurrentPage(pageNumber);
      setContents(currentItems)
      return;
    } else {
      let page = currentPage;
      if (direction === "back" && currentPage > 1) {
        setCurrentPage(--page);
      }
      if (direction === "forward" && !isLastPage) {
        setCurrentPage(++page);
      }
      setContents(currentItems)
    }


  };

  useEffect(() => {
    if (data.length > 1) {
        handlePageChange('any', 1)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
      <BaseButton handleEngagement={() => handlePageChange("back")} mode="outline-dark">
               <div className="flex justify-center gap-4 items-center">
                 <SvgComponent icon='arrow-left' />
                 <BaseText weight="medium" size="small">
                   Previous
                 </BaseText>
               </div>
             </BaseButton>
        <BaseButton handleEngagement={() => handlePageChange("forward")} mode="outline-dark">
               <div className="flex justify-center gap-4 items-center">
                 <BaseText weight="medium" size="small">
                   Next
                 </BaseText>
                 <SvgComponent icon='arrow-right' />
               </div>
             </BaseButton>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="w-full">
          <nav
            className="flex items-center justify-between"
            aria-label="Pagination"
          >
            {currentPage > 1 ? 
               <BaseButton handleEngagement={() => handlePageChange("back")} mode="outline-dark">
               <div className="flex justify-center gap-4 items-center">
                 <SvgComponent icon='arrow-left' />
                 <BaseText weight="medium" size="small">
                   Previous
                 </BaseText>
               </div>
             </BaseButton> : <div></div>
            }
            <div id="id" className="flex items-center justify-center">
            {data.length > 0 &&
              Array.from({ length: totalPages }, (_, index) => 
              { 
                if (currentPage === index + 1) {
                  return <BaseButton
                  key={index}
                  handleEngagement={(e) => handlePageChange("any", index + 1)}
                >
                  <BaseText weight="semibold" size="small" >
                  { index + 1 }
                  </BaseText>
                
                </BaseButton>
                } else {
                  return <button
                  key={index}
                  className=" h-11 rounded-md hover:bg-blue-900 ease-in-out transition-all duration-300  w-11 items-center justify-center flex"
                  onClick={(e) => handlePageChange("any", index + 1)}
                >
                  <BaseText weight="semibold" size="small" >
                  { index + 1 }
                  </BaseText>
                
                </button>
                }
              }
              )}
            </div>
            

            {!isLastPage ?
               <BaseButton handleEngagement={() => handlePageChange("forward")} mode="outline-dark">
               <div className="flex justify-center gap-4 items-center">
                 <BaseText weight="medium" size="small">
                   Next
                 </BaseText>
                 <SvgComponent icon='arrow-right' />
               </div>
             </BaseButton>: <div></div>
            }
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
