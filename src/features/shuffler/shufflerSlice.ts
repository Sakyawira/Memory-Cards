import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import img1 from "../../img/Bread_Jam1.png";
import img2 from "../../img/egg veggies.png";
import img3 from "../../img/egg.png";
import img4 from "../../img/Tuna_Sandwich1.png";
import img5 from "../../img/Pancake.png";


export interface CardState {
    value: any[]
}

const initialState: CardState = {
  value:[
          {"src": img1},
          {"src": img2},
          {"src": img3},
          {"src": img4},
          {"src": img5},
        ],
};
  
export const shuffleSlice = createSlice({
  name: 'shuffler',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    shuffle: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value =  state.value.sort(() => Math.random() - 0.5).map((card: any) => 
      ({
        ...card , id : Math.random()
      }))
      console.log(state.value)
    },
  }
});

export const { shuffle } = shuffleSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectShuffle = (state: RootState) => state.shuffler.value;

export default shuffleSlice.reducer;
