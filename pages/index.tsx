import { useState } from 'react';
import { Input, Rating, Textarea } from '../components';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '@/helpers/api';

function Home(): JSX.Element {
	// { menu }: HomeProps
	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Rating rating={rating} isEditable setRating={setRating} />
			<p>lol</p>
			<Input placeholder="text" />
			<Textarea />
			{/* <ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul> */}
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory,
	});
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
