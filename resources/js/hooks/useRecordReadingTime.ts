export default function useRecordReadingTime() {
    const startTimer = () => {
        return new Date();
    }

    const stopTimer = () => {
        return new Date();
    }

    return {
        startTimer,
        stopTimer,
    }
}