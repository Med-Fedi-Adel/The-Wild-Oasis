import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import { useBookings } from "./useBookings";
import Empty from "../../ui/Empty";

import Pagination from "../../ui/Pagination";

function BookingTable() {
  // const [searchParams] = useSearchParams();

  // const page = Number(searchParams.get("page") || "1");

  const { isLoading, bookings, count } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resourceName="bookings" />;

  // // PAGINATION
  // const paginatedBookings = bookings.filter(
  //   (booking, i) => i < 10 * page && i >= 10 * (page - 1)
  // );

  // // 1) FILTER
  // const filterValue = searchParams.get("status") || "all";

  // let filteredBookings;
  // if (filterValue === "all") filteredBookings = bookings;
  // if (filterValue === "checked-in")
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === "checked-in"
  //   );
  // if (filterValue === "checked-out")
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === "checked-out"
  //   );
  // if (filterValue === "unconfirmed")
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === "unconfirmed"
  //   );

  // // 2) SORT
  // const sortBy = searchParams.get("sortBy") || "startDate-desc";
  // const [field, direction] = sortBy.split("-");
  // const modifier = direction === "asc" ? 1 : -1;

  // const sortedBookings =
  //   field === "startDate"
  //     ? filteredBookings.sort(
  //         (a, b) => modifier * subtractDates(a[field], b[field])
  //       )
  //     : filteredBookings.sort((a, b) => modifier * (a[field] - b[field]));

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination resultsLength={bookings.length} count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
