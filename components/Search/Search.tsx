import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();
	// const { pathname, query } = router;

	// const goToSearch = () => {
	// 	const queryString = search ? `?q=${encodeURIComponent(search)}` : '';
	// 	router.push(`/search${queryString}`);
	// router.push({
	// 	pathname: '/search',
	// 	query: {
	// 		q: search,
	// 	},
	// });
	// };

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key == 'Enter') {
			const queryString = search ? `?q=${encodeURIComponent(search)}` : '';
			router.push(`/search${queryString}`);
		}
	};

	return (
		<form className={cn(className, styles.search)} {...props} role="search">
			<Input className={styles.input} placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
			<Link
				href={{
					pathname: '/search',
					query: {
						q: search,
					},
				}}
			>
				<Button
					appearance="primary"
					className={styles.button}
					aria-label="Искать по сайту"
					// onClick={goToSearch}
				>
					<GlassIcon />
				</Button>
			</Link>
		</form>
	);
};
