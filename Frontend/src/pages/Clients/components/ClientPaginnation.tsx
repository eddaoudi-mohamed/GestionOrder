import {
  Paginator
} from "primereact/paginator";
import { Ripple } from "primereact/ripple";
import { Meta } from "../../../types/metaPaginatoin";

/**
 * Interface for refetch interaction
 */
interface refetchInter {

  HandlePrefetchNext: () => void;
  HandlePrefetchPrev: () => void;
  HandlePrefetchPageLink: (page: number) => void;
  meta:Meta

}



const ClientPagination = ({HandlePrefetchPrev ,HandlePrefetchNext ,HandlePrefetchPageLink , meta}:refetchInter) => {
  

  /**
   * Pagination template
   */
  const PaginationTemplate = {
    /**
     * Layout of pagination
     */
    layout: 'PrevPageLink CurrentPageReport NextPageLink',
    
    /**
     * Previous page link
     */
    PrevPageLink: () => {

      /**
       * Check if meta links length is greater than 0
       */
      if (meta?.total) {
        /**
         * Get previous link
         */

        const Prev = meta?.links[0] ;
        return (
          /**
           * Previous page button
           */
          <button
            type="button"
            className={`${Prev.url !== null ? "text-sky-700" :"text-slate-500"}`}
            disabled={Prev.url == null  ? true : false}
            onClick={() => {
              /**
               * Decrement page number
               */
              HandlePrefetchPrev()
            }}
          >
            <span className="p-3">Previous</span>
          </button>
        )
      }
    },


    /**
     * Next page link
     */
    NextPageLink: () => {
      /**
       * Get next link
       */
      const Next = meta?.links.find(link => link.label === "Next &raquo;");
      if (Next) {
        return (
          /**
           * Next page button
           */
          <button
            type="button"
            className={`${Next.url !== null ? "text-sky-700" : "text-slate-500"}`}
            disabled={Next.url == null  ? true : false} 
            onClick={() => {
              /**
               * Increment page number
               */
              HandlePrefetchNext()

            }}
          >
            <span className="p-3">Next</span>

          </button>
        );
      }
    },
    

    /**
     * Page links
     */
    PageLinks: () => {
      return meta?.links.map((link, i) => {
        /**
         * Check if link is not previous or next
         */
        if (link.label == "&laquo; Previous" || link.label == "Next &raquo;") {
          // console.log("Skipping ", link);
          return null;
          
        }else{
        return (
          /**
           * Page link button
           */
          <button
            key={`link-${i}`}
            type="button"
            className={`${link.active ? "text-sky-700" :"text-slate-500"}`}
            // onMouseEnter={PrefetchPageLink()}
            onClick={() => {
              /**
               * Set page number
               */
              let PageNum= Number(link.label)
              HandlePrefetchPageLink(PageNum);
              // setPage(PageNum);
            }}
          >
            {link.label} -
            <Ripple />
          </button>
        );
      }
      });
    },


    /**
     * Current page report
     */
    CurrentPageReport: () => {
      return (
        <span className="p-3">
          {meta?.current_page} of {meta?.last_page}
        </span>
      );
    },
  };

  return (
    /**
     * Paginator component
     */
    <Paginator
      first={meta?.from}
      rows={meta?.per_page}
      totalRecords={meta?.total}
      template={PaginationTemplate}
    />
  );
};

export default ClientPagination;