import React, { useState, useRef, useEffect, useContext } from 'react';
import { AppContext, Page } from '../context/AppContext';

// --- ICONS ---
const UsersIcon = ({ className = "w-5 h-5" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>;
const MagnifyingGlassIcon = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>;
const XMarkIcon = ({ className = "w-5 h-5" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
const PlusCircleIcon = ({ className = "w-5 h-5" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const TrashIcon = ({ className = "w-5 h-5" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.033-2.134H8.71c-1.123 0-2.033.954-2.033 2.134v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>;
const MinusIcon = ({ className = "w-4 h-4" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /></svg>;
const PlusIcon = ({ className = "w-4 h-4" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>;
const CalendarDaysIcon = ({ className = "w-5 h-5" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>;


// --- HOTEL TYPES ---
interface Room {
    adults: number;
    children: number;
    infants: number;
    childrenAges: (number | null)[];
}
// --- FLIGHT TYPES ---
interface FlightPassengers {
    adults: number;
    children: number;
    infants: number;
}
type FlightClass = 'economy' | 'premium' | 'business' | 'first';
type FlightType = 'round-trip' | 'one-way' | 'multi';
interface FlightLeg {
    from: string;
    to: string;
    date: Date | null;
}

// --- HOOK for closing dropdowns on outside click ---
const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
};

// --- CALENDAR COMPONENT ---
const CalendarPicker: React.FC<{
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
  onClose?: () => void;
  minDate?: Date;
  toggle?: () => void;
}> = ({ selectedDate, onSelect, minDate, toggle }) => {
  const normalizedMinDate = minDate ? new Date(minDate) : new Date();
  normalizedMinDate.setHours(0, 0, 0, 0);

  const [viewDate, setViewDate] = useState(selectedDate || normalizedMinDate);
  
  const daysOfWeek = ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'];
  const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  const changeMonth = (amount: number) => {
    setViewDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(1); // Avoids issues with different month lengths
      newDate.setMonth(newDate.getMonth() + amount);
      return newDate;
    });
  };

  const renderDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`pad-start-${i}`} className="p-1"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const isSelected = selectedDate && currentDate.getTime() === new Date(selectedDate).setHours(0,0,0,0);
      const isDisabled = currentDate < normalizedMinDate;
      const isToday = currentDate.getTime() === today.getTime();

      let classes = 'w-9 h-9 flex items-center justify-center rounded-full text-sm transition-colors duration-200 ';
      if (isDisabled) {
        classes += 'text-gray-300 cursor-not-allowed';
      } else if (isSelected) {
        classes += 'bg-brand-orange text-white font-bold scale-110 shadow';
      } else if (isToday) {
        classes += 'bg-brand-blue/10 text-brand-blue font-semibold';
      } else {
        classes += 'text-gray-700 hover:bg-gray-100 cursor-pointer';
      }

      days.push(
        <div key={day} className="p-1 flex justify-center items-center">
            <button type="button" className={classes} disabled={isDisabled} onClick={() => { onSelect(currentDate); toggle && toggle(); }}>
                {day}
            </button>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="absolute top-full left-0 z-20 mt-1 bg-white shadow-lg rounded-md p-4 border text-gray-800 w-72 sm:w-80 animate-fadeInUp" style={{animationDuration: '0.3s'}}>
      <div className="flex justify-between items-center mb-2">
        <button type="button" onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-100 text-gray-600">&lt;</button>
        <span className="font-semibold text-gray-800">{monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}</span>
        <button type="button" onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-100 text-gray-600">&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
        {daysOfWeek.map(day => <div key={day}>{day}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {renderDays()}
      </div>
    </div>
  );
};


// --- HOTEL COMPONENTS ---
const OccupancySelector: React.FC<{
    rooms: Room[];
    setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
    onClose: () => void;
}> = ({ rooms, setRooms, onClose }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutsideClick(wrapperRef, onClose);

    const handleRoomChange = (roomIndex: number, field: keyof Room, value: number) => {
        const newRooms = [...rooms];
        const room = { ...newRooms[roomIndex], [field]: value };
        
        if (field === 'children') {
            const currentAges = room.childrenAges;
            const newAges = Array(value).fill(null);
            for(let i = 0; i < Math.min(currentAges.length, value); i++) {
                newAges[i] = currentAges[i];
            }
            room.childrenAges = newAges;
        }

        newRooms[roomIndex] = room;
        setRooms(newRooms);
    };

    const handleAgeChange = (roomIndex: number, ageIndex: number, value: string) => {
        const newRooms = [...rooms];
        newRooms[roomIndex].childrenAges[ageIndex] = value ? parseInt(value) : null;
        setRooms(newRooms);
    };

    const addRoom = () => setRooms([...rooms, { adults: 1, children: 0, infants: 0, childrenAges: [] }]);
    const removeRoom = (roomIndex: number) => setRooms(rooms.filter((_, i) => i !== roomIndex));

    const renderAgeSelectors = (roomIndex: number) => {
        const room = rooms[roomIndex];
        if (room.children === 0) return null;
        return (
            <div className="col-span-3 grid grid-cols-3 gap-2 mt-2">
                {room.childrenAges.map((age, ageIndex) => (
                     <div key={ageIndex}>
                        <label className="text-xs text-gray-600">Âge enf.{ageIndex + 1}</label>
                        <select value={age || ''} onChange={(e) => handleAgeChange(roomIndex, ageIndex, e.target.value)} className="w-full p-1.5 border rounded-md text-sm">
                            <option value="">-?-</option>
                            {Array.from({ length: 10 }, (_, i) => i + 2).map(val => <option key={val} value={val}>{val}</option>)}
                        </select>
                    </div>
                ))}
            </div>
        );
    }
    
    return (
        <div ref={wrapperRef} className="absolute top-full left-0 right-0 z-20 mt-1 bg-white shadow-lg rounded-md p-4 border text-gray-800 animate-fadeInUp" style={{animationDuration: '0.3s'}}>
            <div className="flex justify-between items-center border-b pb-2 mb-3">
                <h4 className="font-semibold">Sélection des chambres</h4>
                <button onClick={onClose}><XMarkIcon className="w-5 h-5 text-gray-500 hover:text-gray-800" /></button>
            </div>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                {rooms.map((room, index) => (
                    <div key={index} className="border-b pb-3">
                        <div className="flex justify-between items-center mb-2">
                            <label className="font-semibold text-brand-blue">Chambre {index + 1}</label>
                            {rooms.length > 1 && <button onClick={() => removeRoom(index)} className="text-red-500 hover:text-red-700"><TrashIcon /></button>}
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <label className="text-sm text-gray-600">Adulte(s)</label>
                                <select value={room.adults} onChange={e => handleRoomChange(index, 'adults', parseInt(e.target.value))} className="w-full p-2 border rounded-md">
                                    {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                             <div>
                                <label className="text-sm text-gray-600">Enfant(s)</label>
                                <select value={room.children} onChange={e => handleRoomChange(index, 'children', parseInt(e.target.value))} className="w-full p-2 border rounded-md">
                                     {[0, 1, 2, 3].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                                <span className="text-xs text-gray-500">(2-11 ans)</span>
                            </div>
                             <div>
                                <label className="text-sm text-gray-600">Lit(s) bébé</label>
                                <select value={room.infants} onChange={e => handleRoomChange(index, 'infants', parseInt(e.target.value))} className="w-full p-2 border rounded-md">
                                    {[0, 1, 2].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                                <span className="text-xs text-gray-500">{`(inf à 2 ans)`}</span>
                            </div>
                            {renderAgeSelectors(index)}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center pt-3 mt-2">
                <button onClick={addRoom} className="flex items-center space-x-1 text-sm text-brand-blue font-semibold hover:underline">
                    <PlusCircleIcon />
                    <span>Ajouter une chambre</span>
                </button>
                <button onClick={onClose} className="bg-brand-orange text-white px-4 py-1.5 rounded-md font-semibold text-sm">
                    Valider
                </button>
            </div>
        </div>
    );
};

const HotelSearchForm = () => {
    const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
    const [isOccupancyOpen, setIsOccupancyOpen] = useState(false);
    const [rooms, setRooms] = useState<Room[]>([{ adults: 2, children: 0, infants: 0, childrenAges: [] }]);
    const [destination, setDestination] = useState('');
    const [arrival, setArrival] = useState('22/09/2025');
    const [departure, setDeparture] = useState('23/09/2025');

    const totalRooms = rooms.length;
    const totalAdults = rooms.reduce((sum, room) => sum + room.adults, 0);
    const totalChildren = rooms.reduce((sum, room) => sum + room.children, 0);
    const occupancyText = `${totalRooms} ch., ${totalAdults} ad.${totalChildren > 0 ? `, ${totalChildren} enf.` : ''}`;

    const inputClasses = "w-full h-14 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-brand-blue-dark";
    const labelClasses = "block text-sm font-medium text-gray-500 mb-1 ml-1";

    return (
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-b-lg">
            <form className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                <div className="md:col-span-3">
                    <label className={labelClasses}>Votre Destination</label>
                    <input type="text" placeholder="Ville ou nom d'hôtel" value={destination} onChange={e => setDestination(e.target.value)} className={inputClasses}/>
                </div>
                <div className="md:col-span-2">
                     <label className={labelClasses}>Votre Arrivée</label>
                    <input type="text" value={arrival} onChange={e => setArrival(e.target.value)} className={inputClasses}/>
                </div>
                <div className="md:col-span-2">
                    <label className={labelClasses}>Votre Départ</label>
                    <input type="text" value={departure} onChange={e => setDeparture(e.target.value)} className={inputClasses}/>
                </div>
                <div className="md:col-span-3 relative">
                    <label className={labelClasses}>Chambres et occupation</label>
                    <button type="button" onClick={() => setIsOccupancyOpen(!isOccupancyOpen)} className={`${inputClasses} text-left flex items-center justify-between`}>
                        <span className="truncate">{occupancyText}</span>
                         <UsersIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    </button>
                    {isOccupancyOpen && <OccupancySelector rooms={rooms} setRooms={setRooms} onClose={() => setIsOccupancyOpen(false)} />}
                </div>
                <div className="md:col-span-2">
                    <button type="submit" className="w-full h-14 bg-brand-orange hover:bg-brand-orange-dark text-white flex items-center justify-center transition-colors rounded-md font-bold text-lg">
                        <MagnifyingGlassIcon className="w-6 h-6" />
                    </button>
                </div>
            </form>
            <div className="mt-4 text-center">
                <button onClick={() => setIsAdvancedOpen(!isAdvancedOpen)} className="text-sm text-brand-blue font-semibold hover:underline">
                    {isAdvancedOpen ? 'Masquer' : 'Afficher'} les options de recherche avancée
                </button>
            </div>
            {isAdvancedOpen && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 p-4 bg-gray-50 rounded-md animate-fadeInUp" style={{animationDuration: '0.5s'}}>
                     <div className="md:col-span-3">
                        <label className={labelClasses}>Catégorie</label>
                        <select className={`${inputClasses} bg-white`}>
                            <option value="">Toutes</option>
                            <option value="5">5 étoiles</option>
                            <option value="4">4 étoiles</option>
                            <option value="3">3 étoiles</option>
                        </select>
                     </div>
                     <div className="md:col-span-3">
                         <label className={labelClasses}>Disponibilité</label>
                        <select className={`${inputClasses} bg-white`}>
                            <option value="0">Peu importe</option>
                            <option value="1">Disponible uniquement</option>
                        </select>
                     </div>
                </div>
            )}
        </div>
    )
}


// --- FLIGHT COMPONENTS ---
const PassengerCounter: React.FC<{label: string, value: number, onIncrement: () => void, onDecrement: () => void, note?: string}> = ({ label, value, onIncrement, onDecrement, note }) => (
    <div className="flex justify-between items-center py-3">
        <div>
            <span className="font-semibold text-gray-800 text-base">{label}</span>
            {note && <span className="block text-xs text-gray-500">{note}</span>}
        </div>
        <div className="flex items-center space-x-3">
            <button type="button" onClick={onDecrement} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed" disabled={value === 0}>
                <MinusIcon className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold text-lg text-gray-800">{value}</span>
            <button type="button" onClick={onIncrement} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 hover:bg-gray-100">
                <PlusIcon className="w-4 h-4" />
            </button>
        </div>
    </div>
);

const FlightPassengerSelector: React.FC<{
    passengers: FlightPassengers;
    setPassengers: React.Dispatch<React.SetStateAction<FlightPassengers>>;
    flightClass: FlightClass;
    setFlightClass: React.Dispatch<React.SetStateAction<FlightClass>>;
    toggle: () => void;
}> = ({ passengers, setPassengers, flightClass, setFlightClass, toggle }) => {
    const selectorRef = useRef<HTMLDivElement>(null);
    
    const handlePassengerChange = (type: keyof FlightPassengers, increment: boolean) => {
        setPassengers(prev => {
            const newValue = increment ? prev[type] + 1 : prev[type] - 1;
            if (type === 'adults' && newValue < 1) return prev; // Adults must be at least 1
            if (newValue < 0) return prev;
            
            return {
                ...prev,
                [type]: newValue
            };
        });
    };
    
    return (
        <div ref={selectorRef} className="absolute top-full right-0 z-20 mt-1 bg-white shadow-lg rounded-md p-5 border text-gray-800 w-full animate-fadeInUp" style={{animationDuration: '0.3s'}}>
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-lg text-gray-900">Sélection des passagers & classe</h4>
                <button type="button" onClick={toggle} className="text-gray-400 hover:text-gray-800">
                    <XMarkIcon className="w-6 h-6" />
                </button>
            </div>
            
            <div className="mb-4">
                <select value={flightClass} onChange={e => setFlightClass(e.target.value as FlightClass)} className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-brand-orange focus:border-transparent appearance-none bg-no-repeat bg-right pr-8" style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`}}>
                    <option value="economy">Classe Économique</option>
                    <option value="premium">Classe Éco Premium</option>
                    <option value="business">Classe Affaires</option>
                    <option value="first">Classe Première</option>
                </select>
            </div>

            <div className="divide-y divide-gray-200">
                <PassengerCounter label="Adulte(s)" note="(12 ans et plus)" value={passengers.adults} onIncrement={() => handlePassengerChange('adults', true)} onDecrement={() => handlePassengerChange('adults', false)} />
                <PassengerCounter label="Enfant(s)" note="(2-11 Ans)" value={passengers.children} onIncrement={() => handlePassengerChange('children', true)} onDecrement={() => handlePassengerChange('children', false)} />
                <PassengerCounter label="Bébé(s)" note="(< 2 ans)" value={passengers.infants} onIncrement={() => handlePassengerChange('infants', true)} onDecrement={() => handlePassengerChange('infants', false)} />
            </div>

            <div className="mt-5 text-right">
                <button type="button" onClick={toggle} className="bg-brand-orange text-white px-8 py-2.5 rounded-lg font-bold text-base hover:bg-brand-orange-dark transition-colors shadow-md hover:shadow-lg">
                    OK
                </button>
            </div>
        </div>
    );
};


const FlightSearchForm = () => {
    const { setCurrentPage } = useContext(AppContext);
    const [flightType, setFlightType] = useState<FlightType>('round-trip');
    const [isPassengerOpen, setIsPassengerOpen] = useState(false);
    const [passengers, setPassengers] = useState<FlightPassengers>({ adults: 1, children: 0, infants: 0 });
    const [flightClass, setFlightClass] = useState<FlightClass>('economy');
    const [activeCalendar, setActiveCalendar] = useState<string | null>(null);

    const [from, setFrom] = useState('Tunis Ville - Tous les aéroports (TUN)');
    const [to, setTo] = useState('Paris - Tous les aéroports (PAR)');
    
    const today = new Date();
    today.setHours(0,0,0,0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const [departureDate, setDepartureDate] = useState<Date | null>(today);
    const [returnDate, setReturnDate] = useState<Date | null>(tomorrow);

    const [multiLegs, setMultiLegs] = useState<FlightLeg[]>([
        { from: '', to: '', date: today },
        { from: '', to: '', date: tomorrow }
    ]);
    
    const flightTypeLabels: Record<FlightType, string> = { 'round-trip': 'Aller / Retour', 'one-way': 'Aller simple', 'multi': 'Multi destination' };
    const flightClassLabels: Record<FlightClass, string> = { economy: 'Économique', premium: 'Premium', business: 'Affaires', first: 'Première' };
    const totalPassengers = passengers.adults + passengers.children + passengers.infants;
    const passengerText = `${totalPassengers} passager${totalPassengers > 1 ? 's' : ''}, ${flightClassLabels[flightClass]}`;
    
    const passengerSelectorRef = useRef<HTMLDivElement>(null);

    const toggleCalendar = (id: string) => {
        setActiveCalendar(prev => (prev === id ? null : id));
    };

    const togglePassengerSelector = () => setIsPassengerOpen(prev => !prev);
    
    const handleLegChange = (index: number, field: keyof FlightLeg, value: string | Date | null) => {
        const newLegs = [...multiLegs];
        // @ts-ignore
        newLegs[index][field] = value;

        if (field === 'date') {
            for (let i = index + 1; i < newLegs.length; i++) {
                const prevDate = newLegs[i-1].date;
                if (prevDate && newLegs[i].date && newLegs[i].date! <= prevDate) {
                    const newDateForCurrentLeg = new Date(prevDate);
                    newDateForCurrentLeg.setDate(prevDate.getDate() + 1);
                    newLegs[i].date = newDateForCurrentLeg;
                }
            }
        }
        setMultiLegs(newLegs);
    };

    const handleDepartureDateSelect = (date: Date) => {
        setDepartureDate(date);
        if (flightType === 'round-trip' && returnDate && date >= returnDate) {
            const newReturnDate = new Date(date);
            newReturnDate.setDate(date.getDate() + 1);
            setReturnDate(newReturnDate);
        }
    };
    
    const formatDate = (date: Date | null, placeholder: string): string => {
        if (!date) return placeholder;
        return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const searchParams = {
        from,
        to,
        departureDate: departureDate?.toISOString(),
        returnDate: flightType === 'round-trip' ? returnDate?.toISOString() : undefined,
        passengers,
        flightClass,
        flightType,
        multiLegs,
      };
      setCurrentPage(Page.FlightResults, searchParams);
    };

    const inputClasses = "w-full h-14 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-brand-blue-dark";
    const labelClasses = "block text-sm font-medium text-gray-500 mb-1 ml-1";
    const iconInputWrapperClasses = "relative w-full h-14";
    const clearButtonClasses = "absolute inset-y-0 right-0 flex items-center pr-3 text-green-500 hover:text-green-700";

    return (
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-b-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap items-center justify-start md:justify-between mb-6 gap-y-3">
                <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap">
                    {(Object.keys(flightTypeLabels) as FlightType[]).map(type => (
                         <label key={type} className="flex items-center space-x-2 cursor-pointer text-base font-medium text-gray-700">
                            <input type="radio" name="flightType" value={type} checked={flightType === type} onChange={() => setFlightType(type)} className="peer hidden" />
                            <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${flightType === type ? 'border-blue-600' : 'border-gray-400'}`}>
                                <span className={`w-2.5 h-2.5 rounded-full bg-blue-600 transition-transform ${flightType === type ? 'scale-100' : 'scale-0'}`}></span>
                            </span>
                            <span>{flightTypeLabels[type]}</span>
                        </label>
                    ))}
                </div>
                <div className="flex items-center space-x-4 text-base text-gray-700">
                    <label className="flex items-center"><input type="checkbox" className="form-checkbox h-4 w-4 rounded-sm border-gray-300 text-brand-blue focus:ring-brand-blue/50" /> <span className="ml-1.5">Vol Direct</span></label>
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-10 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
                        </div>
                        <span className="ml-2">Avec bagage</span>
                    </label>
                </div>
            </div>

            {flightType === 'multi' ? (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
                    {/* --- ROW 1 --- */}
                    {/* From 1 */}
                    <div>
                        <label className={labelClasses}>Ville de départ</label>
                        <div className={iconInputWrapperClasses}>
                            <input type="text" placeholder="D'où partez-vous?" value={multiLegs[0].from} onChange={e => handleLegChange(0, 'from', e.target.value)} className={inputClasses} />
                            {multiLegs[0].from && <button type="button" onClick={() => handleLegChange(0, 'from', '')} className={clearButtonClasses}><XMarkIcon className="w-4 h-4"/></button>}
                        </div>
                    </div>
                    {/* To 1 */}
                    <div>
                        <label className={labelClasses}>Ville d'arrivée</label>
                        <div className={iconInputWrapperClasses}>
                            <input type="text" placeholder="Où allez-vous?" value={multiLegs[0].to} onChange={e => handleLegChange(0, 'to', e.target.value)} className={inputClasses} />
                            {multiLegs[0].to && <button type="button" onClick={() => handleLegChange(0, 'to', '')} className={clearButtonClasses}><XMarkIcon className="w-4 h-4"/></button>}
                        </div>
                    </div>
                    {/* Date 1 */}
                    <div className="relative">
                        <label className={labelClasses}>Date de départ</label>
                        <div className={iconInputWrapperClasses}>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400"><CalendarDaysIcon /></div>
                            <button type="button" onClick={() => toggleCalendar(`multi-0`)} className={`${inputClasses} pl-10 text-left`}>
                                {formatDate(multiLegs[0].date, 'Votre départ')}
                            </button>
                        </div>
                        {activeCalendar === `multi-0` && (
                            <CalendarPicker selectedDate={multiLegs[0].date} onSelect={(date) => handleLegChange(0, 'date', date)} toggle={() => toggleCalendar(`multi-0`)} minDate={new Date()} />
                        )}
                    </div>
                    {/* Passengers */}
                    <div className="relative" ref={passengerSelectorRef}>
                        <label className={labelClasses}>Passagers et classe</label>
                        <div className="relative h-14">
                            <button type="button" onClick={togglePassengerSelector} className={`${inputClasses} flex items-center justify-between text-left h-full`}>
                                <span className="truncate">{passengerText}</span>
                            </button>
                            {isPassengerOpen && <FlightPassengerSelector passengers={passengers} setPassengers={setPassengers} flightClass={flightClass} setFlightClass={setFlightClass} toggle={togglePassengerSelector} />}
                        </div>
                    </div>

                    {/* --- ROW 2 --- */}
                    {/* From 2 */}
                    <div>
                        <label className={labelClasses}>Ville de départ</label>
                        <div className={iconInputWrapperClasses}>
                            <input type="text" placeholder="D'où partez-vous?" value={multiLegs[1].from} onChange={e => handleLegChange(1, 'from', e.target.value)} className={inputClasses} />
                            {multiLegs[1].from && <button type="button" onClick={() => handleLegChange(1, 'from', '')} className={clearButtonClasses}><XMarkIcon className="w-4 h-4"/></button>}
                        </div>
                    </div>
                    {/* To 2 */}
                    <div>
                        <label className={labelClasses}>Ville d'arrivée</label>
                        <div className={iconInputWrapperClasses}>
                            <input type="text" placeholder="Où allez-vous?" value={multiLegs[1].to} onChange={e => handleLegChange(1, 'to', e.target.value)} className={inputClasses} />
                            {multiLegs[1].to && <button type="button" onClick={() => handleLegChange(1, 'to', '')} className={clearButtonClasses}><XMarkIcon className="w-4 h-4"/></button>}
                        </div>
                    </div>
                    {/* Date 2 */}
                    <div className="relative">
                        <label className={labelClasses}>Date de départ</label>
                        <div className={iconInputWrapperClasses}>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400"><CalendarDaysIcon /></div>
                            <button type="button" onClick={() => toggleCalendar(`multi-1`)} className={`${inputClasses} pl-10 text-left`}>
                                {formatDate(multiLegs[1].date, 'Votre départ')}
                            </button>
                        </div>
                        {activeCalendar === `multi-1` && (
                            <CalendarPicker selectedDate={multiLegs[1].date} onSelect={(date) => handleLegChange(1, 'date', date)} toggle={() => toggleCalendar(`multi-1`)} minDate={multiLegs[0].date || new Date()} />
                        )}
                    </div>
                    {/* Search Button */}
                    <div>
                         <label className={`${labelClasses} invisible`}>Rechercher</label>
                        <button type="submit" className="w-full h-14 bg-brand-orange hover:bg-brand-orange-dark text-white flex items-center justify-center transition-colors rounded-md">
                            <MagnifyingGlassIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-4 items-end">
                    {/* Ville de départ */}
                    <div className="lg:col-span-4 lg:row-start-1">
                        <label className={labelClasses}>Ville de départ</label>
                        <div className={iconInputWrapperClasses}>
                            <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="D'où partez-vous?" className={inputClasses} />
                            {from && <button type="button" onClick={() => setFrom('')} className={clearButtonClasses}><XMarkIcon className="w-4 h-4"/></button>}
                        </div>
                    </div>

                    {/* Date de départ */}
                    <div className="relative lg:col-span-4 lg:col-start-5 lg:row-start-1">
                        <label className={labelClasses}>Date de départ</label>
                        <div className={iconInputWrapperClasses}>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400"><CalendarDaysIcon /></div>
                            <button type="button" onClick={() => toggleCalendar('departure')} className={`${inputClasses} pl-10 text-left`}>
                                {formatDate(departureDate, 'Date de départ')}
                            </button>
                        </div>
                        {activeCalendar === 'departure' && <CalendarPicker selectedDate={departureDate} onSelect={handleDepartureDateSelect} toggle={() => toggleCalendar('departure')} minDate={new Date()} />}
                    </div>
                    
                    {/* Ville d'arrivée */}
                    <div className="lg:col-span-4 lg:row-start-2">
                        <label className={labelClasses}>Ville d'arrivée</label>
                        <div className={iconInputWrapperClasses}>
                            <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Où allez-vous?" className={inputClasses} />
                            {to && <button type="button" onClick={() => setTo('')} className={clearButtonClasses}><XMarkIcon className="w-4 h-4"/></button>}
                        </div>
                    </div>

                    {/* Date de retour */}
                    <div className="relative lg:col-span-4 lg:col-start-5 lg:row-start-2">
                        <label className={labelClasses}>Date de retour</label>
                        <div className={iconInputWrapperClasses}>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400"><CalendarDaysIcon /></div>
                            <button type="button" onClick={() => toggleCalendar('return')} disabled={flightType === 'one-way'} className={`${inputClasses} pl-10 text-left disabled:bg-gray-100 disabled:cursor-not-allowed`}>
                                {flightType === 'one-way' ? '' : formatDate(returnDate, 'Votre Retour')}
                            </button>
                        </div>
                      {activeCalendar === 'return' && <CalendarPicker selectedDate={returnDate} onSelect={setReturnDate} toggle={() => toggleCalendar('return')} minDate={departureDate || new Date()} />}
                    </div>

                    {/* Passagers et classe */}
                    <div className="md:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-1 relative" ref={passengerSelectorRef}>
                        <label className={labelClasses}>Passagers et classe</label>
                        <div className="relative h-14">
                            <button type="button" onClick={togglePassengerSelector} className={`${inputClasses} flex items-center justify-between text-left h-full`}>
                                <span className="truncate">{passengerText}</span>
                            </button>
                            {isPassengerOpen && <FlightPassengerSelector passengers={passengers} setPassengers={setPassengers} flightClass={flightClass} setFlightClass={setFlightClass} toggle={togglePassengerSelector} />}
                        </div>
                    </div>
                    
                    {/* Button */}
                    <div className="md:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2">
                        <button type="submit" className="w-full h-14 bg-brand-orange hover:bg-brand-orange-dark text-white flex items-center justify-center transition-colors rounded-md">
                            <MagnifyingGlassIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
          </form>
         </div>
    )
}

// --- MAIN WIDGET ---
const SearchWidget: React.FC<{ defaultTab?: string }> = ({ defaultTab = 'Hôtels en Tunisie' }) => {
    const [activeTab, setActiveTab] = React.useState(defaultTab);
    
    const tabs = [
        'Hôtels en Tunisie', "Hôtels à l'étranger", 'Vols',
        'Voyages organisés', 'Visa', 'Omra', 'Coffrets cadeaux'
    ];

    const renderForm = () => {
        if (activeTab === 'Vols') {
            return <FlightSearchForm />;
        }
        // Default to hotel search for other tabs
        return <HotelSearchForm />;
    };

    return (
        <div className="shadow-2xl rounded-lg max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="bg-gray-900 px-3 pt-3 text-white rounded-t-lg">
                <div className="overflow-x-auto horizontal-scroll">
                    <div className="flex border-b border-gray-700">
                        {tabs.map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-3 text-base font-semibold transition-colors border-b-2 whitespace-nowrap ${activeTab === tab ? 'text-brand-orange border-brand-orange' : 'text-white/80 hover:text-white border-transparent'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Form Area */}
            <div className="text-gray-900">
                {renderForm()}
            </div>
        </div>
    );
};

export default SearchWidget;