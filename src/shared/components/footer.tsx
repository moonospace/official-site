export function Footer() {
  return (
    <footer className="flex flex-col" id="footer">
      <div className="flex flex-col tablet:flex-row tablet:items-center py-7 tablet:justify-between mt-8">
        <span className="inline-flex gap-2">
          <i className="fi fi-sc-check-circle" />
          Design and craft in Bali
        </span>

        <span className="inline-flex gap-2">
          Built with <i className="fi fi-sc-heart" />
        </span>
      </div>
    </footer>
  )
}
