export default function MainCTA({ children }) {
    return(
        <button className="px-3 lg:px-6 py-3 lg:py-3 bg-gradient-to-r from-[#06A452] to-[#0DC666] hover:shadow-[#06a4522f] hover:shadow-xl transition-all text-white text-sm lg:text-lg rounded-md">
            { children }  
        </button>
    )
}