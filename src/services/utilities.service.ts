const UtilityService = {
    getFullDate: (fullDate: Date) => {
        const month: string = fullDate.toLocaleString('en-US', {month: 'long'});
        const day: string = fullDate.toLocaleString('en-US', {day: '2-digit'});
        const year: number = fullDate.getFullYear();
      
        return {
          month, 
          day,
          year
        }
    }
}

export default UtilityService;