import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";
import { useState } from "react";


function CarForm() {

    const [showWarn, setShowWarn] = useState(false);

    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        };
    });


    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addCar({
            name,
            cost
        }));
    };

    const status = !(name.length && cost) ;

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    }




    return (
        <div className="car-form  panel">
            <h4 className="subtitle is-3">
                Add Car
            </h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">
                            Name
                        </label>
                        <input
                            className="is-expanded input"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">
                            Cost
                        </label>
                        <input
                            className="is-expanded input"
                            value={cost || ""}
                            onChange={handleCostChange}
                            type='number'
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form >
            <p></p>
        </div>
    )
}
export default CarForm;