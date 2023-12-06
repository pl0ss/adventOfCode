input = '202517468 131640971 1553776977 241828580 1435322022 100369067 2019100043 153706556 460203450 84630899 3766866638 114261107 1809826083 153144153 2797169753 177517156 2494032210 235157184 856311572 542740109';


function sumOfLengths(input) {
    // Splitte den Eingabe-String in Paare von Zahlen
    const pairs = input.split(' ');
  
    // Initialisiere die Summe der Längen
    let sum = 0;
  
    // Iteriere über jedes Zahl-Paar im Input
    for (let i = 1; i < pairs.length; i += 2) {
      // Addiere die Länge zum Gesamtergebnis
      sum += parseInt(pairs[i], 10);
    }
  
    // Gib die Gesamtsumme zurück
    return sum;
  }

// Beispielaufruf mit deinem gegebenen Input
const result = sumOfLengths(input);

// Gib das Ergebnis aus
console.log('Summe der Längen:', result);


function intervalsFromPairs(input) {
    // Splitte den Eingabe-String in Paare von Zahlen
    const pairs = input.split(' ');
  
    // Initialisiere ein leeres Array für die Intervalle
    const intervals = [];
  
    // Iteriere über jedes Zahl-Paar im Input
    for (let i = 0; i < pairs.length; i += 2) {
      // Extrahiere den Startwert und die Länge des Intervalls
      const start = parseInt(pairs[i], 10);
      const length = parseInt(pairs[i + 1], 10);
  
      // Berechne den Endwert des Intervalls
      const end = start + length - 1;
  
      // Füge das Intervall zum Array hinzu
      intervals.push({ start, end });
    }
  
    // Gib das Array mit Intervallen zurück
    return intervals;
  }

// Beispielaufruf mit deinem gegebenen Input

const intervals = intervalsFromPairs(input);

// Gib die Intervalle aus
console.log('Intervalle:', intervals);
  

function hasOverlappingIntervals(intervals) {
    // Sortiere die Intervalle nach dem Startwert
    const sortedIntervals = intervals.slice().sort((a, b) => a.start - b.start);
  
    // Iteriere über die sortierten Intervalle und überprüfe auf Überschneidungen
    for (let i = 1; i < sortedIntervals.length; i++) {
      if (sortedIntervals[i - 1].end >= sortedIntervals[i].start) {
        // Es gibt eine Überschneidung
        return true;
      }
    }
  
    // Keine Überschneidungen gefunden
    return false;
  }
  
  // Beispielaufruf mit den Intervallen aus dem vorherigen Beispiel

  const interval = intervalsFromPairs(input);
  const hasOverlaps = hasOverlappingIntervals(interval);
  
  // Gib das Ergebnis aus
  console.log('Überschneidungen vorhanden:', hasOverlaps);
  