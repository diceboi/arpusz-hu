export default function SecondaryCTA({ children }) {
    return(
        <button className="px-6 py-3 hover:shadow-lg hover:border-neutral-400 transition-all text-black text-lg border border-neutral-300 rounded-md">
            { children }
        </button>
    )
}