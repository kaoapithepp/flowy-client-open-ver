import {
    FC,
    createContext,
    ReactNode,
    useMemo,
    useState,
    useContext,
} from "react";

// interface
import { IBookingEntity } from "../interfaces/booking.interface";
  
interface Props {
    children?: ReactNode;
}
  
const BookEntityContext = createContext({} as ReturnType<typeof passBookEntityValuesForProvider>);
  
    /** Below is for the Chrome React dev Tools extension
     * to display the name of the context instead
     * of "Context.provider"
     **/
BookEntityContext.displayName = "BookEntityContext";
  
    /** Custom Hook for importing the 
     *  state in other areas of the app.
     *  Function name could be changed
     **/
export function useBookEntityValue() {
    const context = useContext(BookEntityContext);

    /** This check is optional if you are wrapping provider around a sub part
     *  of the component tree and not the entire app, to limit is availability
     *  to a certain section of the app.
     **/
    if (context === undefined) {
        throw new Error("useValue must be used within a ValueProvider");
    }

    // prepare getter, setter to be called
    return context;
};
  
  /* Function name could be changed*/
function passBookEntityValuesForProvider(){
    // In this case, we want this value variable and it's setter function to be available globally.

    /* CUSTOMIZE HERE BY CHANGING val & setVal's name, initial state*/
    const [bookingEntity, setBookingEntity] = useState<IBookingEntity>({});

    //The state should be memoized to maintain the referential equality/ same location in memory. If not
    // every time this context is called a new location in memory will be created for the values.
    const valueObject = useMemo(() => {
        return { bookingEntity, setBookingEntity };
    }, [bookingEntity, setBookingEntity]);

    return valueObject;
}
  
// the value prop that is passed down are available to all of it's children.
const BookEntityProvider: FC<Props> = ({ children }) => {
    return (
        <BookEntityContext.Provider value={passBookEntityValuesForProvider()}>
            {children}
        </BookEntityContext.Provider>
    );
};

export default BookEntityProvider;