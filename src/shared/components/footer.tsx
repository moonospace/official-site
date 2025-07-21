export function Footer() {
  return (
    <footer className="flex flex-col text-sm" id="footer">
      <div className="flex flex-col tablet:flex-row tablet:items-center py-7 tablet:justify-between mt-8">
        <span className="text-sm">Design and craft in Bali</span>
        <span className="inline-flex gap-2">
          Built with <i className="fi fi-sc-heart" />
        </span>
      </div>
    </footer>
  )
}
