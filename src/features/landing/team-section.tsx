export function TeamSection() {
  return (
    <section className="mx-auto flex w-full flex-col">
      <div className="flex flex-col gap-6 text-pretty leading-7">
        <p>
          Moono was founded by{" "}
          <a
            className="text-link underline"
            href={"https://nyomansunima.com"}
            rel="noopener"
            target="_blank"
          >
            Nyoman Sunima
          </a>{" "}
          in 2024 as the publication for all of the software products that has
          been created. Everythig just start small until it become a thing and
          supported by people in the community.
        </p>
        <p>
          Now, we just focus on shipping a high quality product that combine the
          team with community feedback and understand what they really needs and
          wants.
        </p>
      </div>
    </section>
  );
}
