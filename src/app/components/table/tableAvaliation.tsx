import * as React from "react";
import { DataTable } from "react-native-paper";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

const TableAvaliation = () => {
  const [page, setPage] = React.useState<number>(0);
  const [numberItensPage] = React.useState([2, 3, 4]);
  const [itensPage, onItemsPage] = React.useState(numberItensPage[0]);

  const [items] = React.useState([
    {
      nquartos: 23,
      checkin: "07/08/2024",
      checkout: "07/08/2024",
      nota: 5.0,
    },
    {
      nquartos: 23,
      checkin: "07/08/2024",
      checkout: "07/08/2024",
      nota: 5.0,
    },
    {
      nquartos: 23,
      checkin: "07/08/2024",
      checkout: "07/08/2024",
      nota: 5.0,
    },
    {
      nquartos: 23,
      checkin: "07/08/2024",
      checkout: "07/08/2024",
      nota: 5.0,
    },
    {
      nquartos: 23,
      checkin: "07/08/2024",
      checkout: "07/08/2024",
      nota: 5.0,
    },
  ]);

  const from = page * itensPage;

  const to = Math.min((page + 1) * itensPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itensPage]);

  return (
    <DataTable style={styles.containerTable}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={styles.boxTextHead} textStyle={styles.textHead}>N° quarto</DataTable.Title>
        <DataTable.Title style={styles.boxTextHead} textStyle={styles.textHead}>Check-in</DataTable.Title>
        <DataTable.Title style={styles.boxTextHead} textStyle={styles.textHead}>Check-out</DataTable.Title>
        <DataTable.Title style={styles.boxTextHead} textStyle={styles.textHead}>Nota</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row>
          <DataTable.Cell style={styles.boxTextHead} textStyle={styles.textHead}>{item.nquartos}</DataTable.Cell>
          <DataTable.Cell style={styles.boxTextHead} textStyle={styles.textHead}>{item.checkin}</DataTable.Cell>
          <DataTable.Cell style={styles.boxTextHead} textStyle={styles.textHead}>{item.checkout}</DataTable.Cell>
          <DataTable.Cell style={styles.boxTextHead} textStyle={styles.textHead}>{item.nota}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itensPage)}
        onPageChange={(page) => {
          setPage(page);
        }}
        label={`${from + 1} - ${to} of ${items.length}`}
        numberOfItemsPerPageList={numberItensPage}
        numberOfItemsPerPage={itensPage}
        onItemsPerPageChange={onItemsPage}
        selectPageDropdownLabel="Linhas"
      ></DataTable.Pagination>
    </DataTable>
  );
};

export default TableAvaliation;

const styles = StyleSheet.create({
  containerTable: {
    borderRadius: 13,
    backgroundColor: "#1C1C23",
    color: "white",
  },

  tableHeader: {
    borderTopEndRadius: 13,
    borderTopStartRadius: 13,
  },

  boxTextHead: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textHead: {
    color: "white",
    textAlign: 'center',
  },
});
