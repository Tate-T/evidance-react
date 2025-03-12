import "./Call.scss";

export const Call = () => {
  return (
    <div className="container call__container">
      <div className="call">
        <button aria-label="call-button" data-contact-open class="call__btn">
          <svg className="call__icon" width="22" height="24">
            <use href="./svg/icons.svg#call-icon"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Call;
