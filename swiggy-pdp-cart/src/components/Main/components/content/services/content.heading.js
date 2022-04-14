export function returnHeadingById(id, list) {
    var name;
    list.forEach((element) => {
      if (element.id === id) {
        name = element.displayName;
      }
    });
    return name;
  }