export default function Project({ project }) {
  return (
    <div className="bg-white my-8 rounded-lg shadow-lg flex flex-col mx-auto w-fit lg:flex-row gap-12 p-6">
      <div className="max-w-[490px] max-h-[360px] overflow-hidden rounded-md shadow-lg">
        <a target="_blank" href={project.live}>
          <img
            className="block h-full min-w-full object-cover "
            src={project.img}
            alt=""
          />
        </a>
      </div>

      <div className="lg:text-left text-center max-w-[350px] mx-auto ">
        <h3 className="w-fit text-center mx-auto font-bold leading-10 text-xl">
          {project.title}
        </h3>
        <p className="w-fit text-center my-4 text-text font-medium">
          {project.description}
        </p>
        <div className="flex gap-4 mx-auto w-fit">
          <div className="shadow-md  w-fit  font-semibold text-[1rem] px-[13px] py-[10px]">
            {project.skills[0]}
          </div>
          <div className="shadow-md w-fit  font-semibold text-[1rem] px-[13px] py-[10px]">
            {project.skills[1]}
          </div>
        </div>
        <div className="mx-auto w-fit mt-8 flex font-semibold gap-4 ">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-1 hover:text-sec"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className=" inlinebi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>{" "}
            Code
          </a>
          <a
            target="_blank"
            href={project.live}
            className="flex items-center gap-1 hover:text-sec"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="font-bold bi bi-box-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
