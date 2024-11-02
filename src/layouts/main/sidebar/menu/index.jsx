import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="mt-0 5 mb-1">
      <NavLink to="/" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full inline-flex pr-4 items-center gap-5  group-hover:bg-[#eff3f41a] transition-colors",
              {
                "font-bold": isActive,
              }
            )}
          >
            {isActive && (
              <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                <path
                  fill="#e7e9ea"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            )}
            {!isActive && (
              <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                <path
                  fill="#e7e9ea"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            )}
            <div className="pr-4 text-xl">Ana Sayfa</div>
          </div>
        )}
      </NavLink>
    </nav>
  );
}
