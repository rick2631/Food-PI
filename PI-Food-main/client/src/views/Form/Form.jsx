import React from "react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getRecipesAll, getTypes, postRecipes } from "../../redux/actions";
import FormCss from "../Form/Form.module.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (input.name.length > 50) {
    errors.name = "Name cannot exceed 50 characters";
  }

  if (!input.summary) {
    errors.summary = "Summary is require";
  
  }

  return errors;
}

export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory();

  const type = useSelector((state) => state.types);
  const allState = useSelector((state) => state.recipesAll);
  const [error, setError] = useState({});
  // console.log(allState);

  const [input, setInput] = useState({
    name: "",
    summary: "",
    score: 0,
    healthScore: 0,
    image:
      "https://st.depositphotos.com/1987177/3470/v/600/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg",
    steps: "",
    diets: [],
    
  });


  useEffect(() => {
    dispatch(getTypes());
  }, []);

  function handleDisabled() {
    if (input.name !== "" && !error.name && input.summary !== "") {
      return false;
    }
    return true;
  }
  
  function handleSubmit(evt) {
    evt.preventDefault();
    try {
    dispatch(postRecipes(input));
    history.push('/home')
    alert('{Felicidades recipe creado!')
    }catch(error){
    
    alert(error.message);
  } 
  }

  function handleSelect(evt) {
    if (!input.diets.includes(evt.target.value)) {
      setInput({
        ...input,
        diets: [...input.diets, evt.target.value],
      });
    }
    console.log(input);
  }

  function handleChange(evt) {
    setInput({
      ...input,
      [evt.target.name]: evt.target.value,
    });
    setError(
      validate({
        ...input,
        [evt.target.name]: evt.target.value,
      })
    );
    if (
      allState.find(
        (recipe) => recipe.name.toLowerCase() === evt.target.value.toLowerCase()
      )
    ) {
      setError({
        ...input,
        [evt.target.name]: "Recipe is found",
      });
    }
    //console.log(input);
  }

  function handleNumber(evt) {
    try {
      const parsValue = parseInt(evt.target.value);
      if (Number.isInteger(parsValue) && parsValue >= 0 && parsValue <= 100) {
        setInput({
          ...input,
          [evt.target.name]: parsValue,
        });
      }
    } catch {
      console.log("error");
    }
    // console.log(input)
  }

  function handleDelete(evt) {
    //evt.preventDefault()
    setInput({
      ...input,
      diets: input.diets.filter((diet) => diet !== evt),
    });
  }

  //console.log(input);
//console.log(type)
return (
  <div className={FormCss.contenedor}>
    <div className={FormCss.divgral}>
      <h2 className={FormCss.h2}>CREATE YOUR OWN FOOD </h2>

      <form className={FormCss.form} onSubmit={(evt) => handleSubmit(evt)}>
        <div className={FormCss.input}>
          <label>Recipe: </label>
          <input
            type="text"
            autoComplete="off"
            value={input.name}
            name="name"
            placeholder="Add Name..."
            onChange={(evt) => handleChange(evt)}
          />
          {error.name && <p className="error">{error.name}</p>}
        </div>

        <div className={FormCss.input}>
          <label>Summary: </label>
          <input
            type="text"
            value={input.summary}
            name="summary"
            placeholder="Write Summary here..."
            onChange={(evt) => handleChange(evt)}
          />
        </div>

        <div className={FormCss.input}>
          <label>Score: </label>
          <input
            type="number"
            value={input.score}
            name="score"
            onChange={(evt) => handleNumber(evt)}
          />
        </div>

        <div className={FormCss.input}>
          <label>Health Score: </label>
          <input
            type="number"
            value={input.healthScore}
            name="healthScore"
            onChange={(evt) => handleNumber(evt)}
          />
        </div>

        <div className={FormCss.input}>
          <label>Steps: </label>
          <input
            type="text"
            value={input.steps}
            name="steps"
            placeholder="Write Steps here..."
            onChange={(evt) => handleChange(evt)}
          />
        </div>

        <button
          type="submit"
          className={FormCss.buttonform}
          disabled={handleDisabled()}
        >
          CREATE!
        </button>

        <div className={FormCss.input}>
          <label>Diets: </label>
          <select
            className={FormCss.input}
            onChange={(evt) => handleSelect(evt)}
          >
            <option disabled>Diets</option>
            {type?.map((type, id) => (
              <option key={`${type.name}-${id}`} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>

          <div></div>

          <div>
            {input.diets?.map((diet, id) => (
              <div key={id} className="div">
                <p className={FormCss.input}>{diet}
                  <button
                    type="button" 
                    className={FormCss.buttondelete}
                    onClick={() => handleDelete(diet)}
                  >
                    X
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </form>
      <a href="/home">
        <button
          className={FormCss.buttonform1}
          onClick={() => dispatch(getRecipesAll())}
        >
          Return home
        </button>
      </a>
    </div>
  </div>
);
            }